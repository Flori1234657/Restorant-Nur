const imagePath = import.meta.env.PROD
  ? `path for build here`
  : `src/assets/webp/home/hero/hero-image`;

const heroBckImg = (screenWidth: number): string => {
  const breakpoint = [600, 900, 1200, 1500, 2000, 2400];

  for (let i = 0; i < breakpoint.length; i++) {
    if (screenWidth <= breakpoint[i])
      return `${imagePath}-${breakpoint[i]}.webp`;
  }

  return `${imagePath}-2400.webp`;
};

export default heroBckImg;
