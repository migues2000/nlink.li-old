import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { getSession } from '@auth0/nextjs-auth0';
import { shorten } from '@helpers/server/shortener';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post('/api/shorten', async (req, res) => {
  try {
    const session = getSession(req, res);
    const input = JSON.parse(req.body);

    const shortenedLink = await shorten(input, session?.user.sub);

    return res.status(201).send(shortenedLink);
  } catch (error) {
    throw error;
  }
});

export default router.handler({
  onError: (err, req, res) => {
    res.status(500).end();
  },
  onNoMatch: (req, res) => {
    res.status(404).end();
  },
});
