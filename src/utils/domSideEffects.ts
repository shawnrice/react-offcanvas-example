////
// src/utils/domSideEffects.ts

export const lockScroll = () => {
  document.body.style.height = '100%';
  document.body.style.overflow = 'hidden';
};

export const unlockScroll = () => {
  document.body.style.height = 'initial';
  document.body.style.overflow = 'initial';
};
