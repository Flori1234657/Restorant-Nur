const getImagePath = (devPath: string) => {
  return new URL(`../assets/${devPath}`, import.meta.url).href;
};

export default getImagePath;
