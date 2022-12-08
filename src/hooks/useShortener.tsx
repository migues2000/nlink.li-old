import { default as create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { hashSync } from 'bcryptjs';

type ShortenerState = {
  link: string | undefined;
  password: string | undefined;
  isSensitive: boolean;
  addPassword: (password: string) => void;
  removePassword: () => void;
  markAsSensitive: () => void;
  unmarkAsSensitive: () => void;
  setLink: (link: string | undefined) => void;
  reset: () => void;
};

const useShortener = create<ShortenerState>()(
  devtools(
    persist(
      (set, get) => ({
        link: undefined,
        password: undefined,
        isSensitive: false,
        addPassword: (password) => set({ password: hashSync(password, 12) }),
        removePassword: () => set({ password: undefined }),
        markAsSensitive: () => set({ isSensitive: true }),
        unmarkAsSensitive: () => set({ isSensitive: false }),
        setLink: (link) => set({ link }),
        shorten: async () => {
          const result = await fetch('/api/shorten', {
            method: 'POST',
            body: JSON.stringify({
              link: get().link,
              password: get().password,
              isSensitive: get().isSensitive,
            }),
          });

          if (result.status !== 201) throw new Error('Something went wrong');

          set({ link: undefined });
          return await result.text();
        },
        reset: () => {
          set({ link: undefined, password: undefined, isSensitive: false });
        },
      }),
      {
        name: 'shortener-storage',
      }
    )
  )
);
export default useShortener;
