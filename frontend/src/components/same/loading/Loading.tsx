import './loading.css';

function Loading({ w }: { w: string }) {
  return (
    <div
      className="loader"
      aria-label="Loading Animation"
      style={{ width: w }}
    />
  );
}

export default Loading;
