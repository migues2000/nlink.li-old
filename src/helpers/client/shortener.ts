export const shorten = async (
  link: string,
  onError: () => void,
  onSuccess: (shortenedLink: string) => void,
  password?: string,
  isSensitive?: boolean
) => {
  try {
    const result = await fetch('/api/shorten', {
      method: 'POST',
      body: JSON.stringify({ link, password, isSensitive }),
    });

    if (result.status !== 201) throw new Error('Something went wrong');

    onSuccess(await result.text());
  } catch (error) {
    onError();
  }
};
