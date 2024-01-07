import {
  Card,
  CardOverflow,
  CardContent,
  AspectRatio,
  IconButton,
  Stack,
  Typography,
  Chip,
  Modal,
} from "@mui/joy";
import { IoHeart as IconWish } from "react-icons/io5";
import { FaClock, FaCheck } from "react-icons/fa6";
import { FaUserFriends as UsersIcon, FaCalendar } from "react-icons/fa";

const WishlistCardOpen = () => {
  return (
    <Modal open={false}>
      <Card>
        <CardOverflow>
          <AspectRatio>
            <img src="" alt="Food Image" />
          </AspectRatio>
        </CardOverflow>
        <IconButton>
          <IconWish />
        </IconButton>
        <CardContent>
          <Stack>
            <Typography level="h1">Shrimp linguine</Typography>
            <Typography level="body-lg">
              Linguine with shrimp and spice
            </Typography>
            <Stack>
              <Chip startDecorator={<UsersIcon />}>4 persons</Chip>
              <Chip startDecorator={<FaCalendar />}>Until 12/02/2024</Chip>
            </Stack>
            <Stack>
              <Chip startDecorator={<FaClock />}>10 Min</Chip>
              <Chip startDecorator={<FaCheck />}>Available</Chip>
            </Stack>
          </Stack>
          <Stack>
            <Typography level="title-lg">$15.99</Typography>
            <Typography level="body-lg">-20%</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default WishlistCardOpen;
