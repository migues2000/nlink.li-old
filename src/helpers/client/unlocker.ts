export const unlock = async (
  id: string,
  password: string,
  onError: () => void,
  onSuccess: (link: string) => void
) => {
  const result = await fetch('/api/unlock', {
    method: 'POST',
    body: JSON.stringify({ id, password }),
  });

  if (result.status !== 200) return onError();

  return onSuccess(await result.text());
};
