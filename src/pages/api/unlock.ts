import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { unlock } from '@helpers/server/unlocker';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post('/api/unlock', async (req, res) => {
  try {
    const input = JSON.parse(req.body);

    const shortenedLink = await unlock(input);

    return res.status(200).send(shortenedLink);
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
