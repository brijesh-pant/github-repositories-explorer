import mediaQuery from "css-mediaquery";

export const createMatchMedia =
  (width: number) =>
  (query: string): MediaQueryList => {
    return {
      matches: mediaQuery.match(query, { width }),
      media: "",
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    };
  };

export const resizeScreenSize = (width: number) => {
  window.matchMedia = createMatchMedia(width);
};
