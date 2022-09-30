import { ShortenerContext } from '@contexts/ShortenerContext';
import { useContext } from 'react';

const useShortener = () => {
  const context = useContext(ShortenerContext);

  return { ...context };
};

export default useShortener;
