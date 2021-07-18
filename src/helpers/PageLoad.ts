export const isPageLoaded = () => {
  let readyState;

  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
      readyState = true;
    }
  });

  return readyState;
};
