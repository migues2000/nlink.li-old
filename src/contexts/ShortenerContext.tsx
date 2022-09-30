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
      }}
    >
      {children}
    </ShortenerContext.Provider>
  );
};
