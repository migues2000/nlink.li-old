import { default as create } from 'zustand';
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

const useShortener = create<ShortenerState>()((set, get) => ({
  link: undefined,
  password: undefined,
  isSensitive: false,
  addPassword: (password) => set({ password: hashSync(password, 12) }),
  removePassword: () => set({ password: undefined }),
  markAsSensitive: () => set({ isSensitive: true }),
  unmarkAsSensitive: () => set({ isSensitive: false }),
  setLink: (link) => set({ link }),
  reset: () => {
    set({ link: undefined, password: undefined, isSensitive: false });
  },
}));
export default useShortener;
