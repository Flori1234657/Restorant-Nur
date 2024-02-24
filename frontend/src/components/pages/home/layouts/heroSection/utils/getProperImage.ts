import getImagePath from '@/utils/getImagePath';

const heroBckImg = (screenWidth: number): string => {
  const breakpoint = [600, 900, 1200, 1500, 2000, 2400];

  for (let i = 0; i < breakpoint.length; i += 1) {
    if (screenWidth <= breakpoint[i])
      return getImagePath(`webp/home/hero/hero-image-${breakpoint[i]}.webp`);
  }

  return getImagePath(`webp/home/hero/hero-image-2400.webp`);
};

export default heroBckImg;
