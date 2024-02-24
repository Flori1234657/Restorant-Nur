import Stack from '@mui/joy/Stack';
import './pageLoading.css';

function PageLoading() {
  return (
    <Stack
      sx={(theme) => ({
        width: '100vw',
        height: '100vh',
        bgcolor: theme.palette.secondary.gray3,
        position: 'absolute',
        zIndex: 2000,
      })}
      alignItems="center"
      justifyContent="center"
    >
      <div className="pan-lder">
        <div className="lder" />
        <div className="pan-container">
          <div className="pan" />
          <div className="handle" />
        </div>
        <div className="shadow" />
      </div>
    </Stack>
  );
}

export default PageLoading;
