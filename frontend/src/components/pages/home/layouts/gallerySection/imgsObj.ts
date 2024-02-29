type ImageObjectType = {
  gridColumns: number;
  width: string;
  path: string;
  ratio: string;
};

const imageObjectsMap: ImageObjectType[] = [
  {
    gridColumns: 2,
    width: '5.875rem',
    path: '1.webp',
    ratio: '1.09',
  },
  {
    gridColumns: 4,
    width: '9.875rem',
    path: '2.webp',
    ratio: '1.84',
  },
  {
    gridColumns: 6,
    width: '16rem',
    path: '3.webp',
    ratio: '2.98',
  },
  {
    gridColumns: 4,
    width: '9.875rem',
    path: '4.webp',
    ratio: '1.84',
  },
  {
    gridColumns: 2,
    width: '5.875rem',
    path: '5.webp',
    ratio: '1.09',
  },
];

export default imageObjectsMap;
