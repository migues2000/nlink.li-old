import type { NextApiHandler } from 'next';
import { default as prisma } from '@lib/prisma';
import { compare } from 'bcryptjs';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') return res.status(404).end();

  const input = JSON.parse(req.body);

  try {
    const shortenedLink = await prisma.shortenedLink.findUnique({
      where: { id: input.id as string },
    });
    if (!shortenedLink || !shortenedLink.password) return res.status(400).end();

    const match = await compare(input.password, shortenedLink.password);
    if (!match) return res.status(400).end();

    return res.status(200).send(shortenedLink.link);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

export default handler;
