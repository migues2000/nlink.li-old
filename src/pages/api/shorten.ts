import type { NextApiHandler } from 'next';
import { default as prisma } from '@lib/prisma';
import { nanoid } from 'nanoid';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') return res.status(404).end();

  const input = JSON.parse(req.body);

  try {
    const shortenedLink = await prisma.shortenedLink.create({
      data: { ...input, id: nanoid(4) },
    });
    return res.status(201).send(`${process.env.DOMAIN}/${shortenedLink.id}`);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

export default handler;
