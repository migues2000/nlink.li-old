import { default as prisma } from '@lib/prisma';
import { Prisma } from '@prisma/client';
import { nanoid } from 'nanoid';
import { scheduleJob } from 'node-schedule';

export const shorten = async (
  input: Prisma.ShortenedLinkCreateInput,
  userId?: string
) => {
  try {
    const shortenedLink = await prisma.shortenedLink.create({
      data: { ...input, id: nanoid(4), userId },
    });
    !userId
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
    return `${process.env.DOMAIN}/${shortenedLink.id}`;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
