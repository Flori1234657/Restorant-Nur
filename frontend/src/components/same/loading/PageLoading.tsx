import Stack from "@mui/joy/Stack";
import "./pageLoading.css";

const PageLoading = () => {
  return (
    <Stack
      sx={(theme) => ({
        width: "100vw",
        height: "100vh",
        bgcolor: theme.palette.secondary.gray3,
        position: "absolute",
        zIndex: 2000,
      })}
      alignItems="center"
      justifyContent="center"
    >
      <div className="pan-lder">
        <div className="lder"></div>
        <div className="pan-container">
          <div className="pan"></div>
          <div className="handle"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </Stack>
  );
};

export default PageLoading;
