const Loading = ({ w }: { w: string }) => {
  return (
    <div
      className="loader"
      aria-label="Loading Animation"
      style={{ width: w }}
    ></div>
  );
};

export default Loading;
