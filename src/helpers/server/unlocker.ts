import { default as prisma } from '@lib/prisma';
import { compare } from 'bcryptjs';

export const unlock = async (input: { id: string; password: string }) => {
  try {
    const shortenedLink = await prisma.shortenedLink.findUnique({
      where: { id: input.id as string },
    });
    if (!shortenedLink || !shortenedLink.password)
      throw new Error('Something went wrong');

    const match = await compare(input.password, shortenedLink.password);
    if (!match) throw new Error('Passwords does not match');

    return shortenedLink.link;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
