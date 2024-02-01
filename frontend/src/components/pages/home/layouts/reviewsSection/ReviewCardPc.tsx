import { AspectRatio, Stack, Typography } from "@mui/joy";
import PlaceholderImg from "../../../../../assets/webp/reviews/placeholder-pc.jpg";

const ReviewCardPc = ({ fontS }: { fontS: string }) => {
  return (
    <Stack
      sx={(theme) => ({
        bgcolor: theme.palette.primary[100],
        borderRadius: "0.5rem",
        alignItems: "center",
        position: "relative",
        fontSize: fontS,
        maxWidth: "12em",
        mt: "1.5em",
        height: "0",
      })}
    >
      <AspectRatio
        ratio="1/1"
        sx={(theme) => ({
          width: "3.264em",
          borderRadius: "50%",
          border: `0.30em solid ${theme.palette.primary[100]}`,
          position: "absolute",
          top: "-1.632em",
        })}
      >
        <img src={PlaceholderImg} alt="Client profile image" />
      </AspectRatio>
      <Typography
        sx={(theme) => ({
          color: theme.palette.primary[900],
          fontFamily: "'La Belle Aurore', cursive",
          fontSize: "0.75em",
          px: "1.098em",
          py: "1.885em",
          textAlign: "center",
        })}
      >
        Lorem ipsum dolor sit amet consectetur. Fames malesuada id magna enim
        faucibus eu turpis
      </Typography>
    </Stack>
  );
};

export default ReviewCardPc;
