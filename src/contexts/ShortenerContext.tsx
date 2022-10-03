import { createContext, useEffect, useState } from 'react';
import { hashSync } from 'bcryptjs';

type ShortenerContextProps = {
  link: string | undefined;
  password: string | undefined;
  isSensitive: boolean;
  addPassword: (password: string) => void;
  removePassword: () => void;
  markAsSensitive: () => void;
  unmarkAsSensitive: () => void;
  setLink: (link: string | undefined) => void;
  shorten: () => Promise<string>;
};

export const ShortenerContext = createContext<ShortenerContextProps>(
  {} as ShortenerContextProps
);

type ShortenerContextProviderProps = { children: React.ReactNode };

export const ShortenerContextProvider = ({
  children,
}: ShortenerContextProviderProps) => {
  const [link, setLink] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isSensitive, setIsSensitive] = useState(false);

  useEffect(() => {
    if (link === undefined) setPassword(undefined), setIsSensitive(false);
  }, [link]);

  const addPassword = (password: string) => setPassword(hashSync(password, 12));
  const removePassword = () => setPassword(undefined);
  const markAsSensitive = () => setIsSensitive(true);
  const unmarkAsSensitive = () => setIsSensitive(false);

  const shorten = async () => {
    const result = await fetch('/api/shorten', {
      method: 'POST',
      body: JSON.stringify({ link, password, isSensitive }),
    });

    if (result.status !== 201) throw new Error('Something went wrong');

    setLink(undefined);
    return await result.text();
  };

  return (
    <ShortenerContext.Provider
      value={{
        link,
        password,
        isSensitive,
        addPassword,
        removePassword,
        markAsSensitive,
        unmarkAsSensitive,
        setLink,
        shorten,
      }}
    >
      {children}
    </ShortenerContext.Provider>
  );
};
