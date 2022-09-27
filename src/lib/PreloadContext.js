import React, { createContext, useContext } from 'react';

const PreloadContext = createContext(null);
export default PreloadContext;

export const Preloader = ({ resolve }) => {
  const preloadContext = useContext(PreloadContext);
  if (!preloadContext) return null; // 값이 유효하지않다면
  if (preloadContext.done) return null; // 이미 작업이 끝났다면

  preloadContext.promises.push(Promise.resolve(resolve()));
  return null;
};
