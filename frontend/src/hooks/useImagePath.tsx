type Props = {
  buildPath: string;
  developmentPath: string;
};

const useImagePath = ({ buildPath, developmentPath }: Props) => {
  const imagePath = import.meta.env.PROD
    ? buildPath
    : `src/assets/${developmentPath}`;

  return { imagePath };
};

export default useImagePath;
