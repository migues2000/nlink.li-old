import type { NextApiHandler } from 'next';
import { default as prisma } from '@lib/prisma';
import { nanoid } from 'nanoid';
import { scheduleJob } from 'node-schedule';
import { getSession } from '@auth0/nextjs-auth0';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') return res.status(404).end();

  try {
    const session = getSession(req, res);
    const input = JSON.parse(req.body);

    const shortenedLink = await prisma.shortenedLink.create({
      data: { ...input, id: nanoid(4), userId: session?.user.sub },
    });
    !session
      ? scheduleJob(
          new Date(
            shortenedLink.shortened_at.getTime() +
              Number(process.env.NEXT_PUBLIC_SHORTENED_LINK_EXPIRATION_TIME)
          ),
          async () => {
            try {
              await prisma.shortenedLink.delete({
                where: { id: shortenedLink.id },
              });
            } catch (error) {
              console.log(error);
            }
          }
        )
      : null;
    return res.status(201).send(`${process.env.DOMAIN}/${shortenedLink.id}`);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

export default handler;
