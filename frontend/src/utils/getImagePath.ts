const getImagePath = (developmentPath: string) => {
  return new URL(`../assets/${developmentPath}`, import.meta.url).href;
};

export default getImagePath;
