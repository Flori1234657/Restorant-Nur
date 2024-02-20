import { IconButton, Stack, Typography } from "@mui/joy";
import React from "react";
import { navIt, navItActive } from "../../sxObj/phNavSx.ts";
import { NavActiveItems } from "../../../../../hooks/useToggleActiveNav.tsx";
import { useNavigate } from "react-router-dom";

export type NavItProps = {
  icon: React.ReactNode;
  txt: "Promos" | "Wishlist" | "Home" | "Menu" | "Book";
  path: string;
  activeMap: NavActiveItems;
  changeActive: (
    name: "Promos" | "Wishlist" | "Home" | "Menu" | "Book"
  ) => void;
};

const Item = (props: NavItProps) => {
  const nav = useNavigate();

  return (
    <Stack
      gap="0.25rem"
      alignItems="center"
      sx={{ mb: props.activeMap[props.txt] ? "2.25rem" : "" }}
    >
      <IconButton
        aria-label="Home page link"
        color="primary"
        variant="solid"
        sx={(theme) =>
          props.activeMap[props.txt] ? navItActive(theme) : navIt(theme)
        }
        onClick={() => {
          props.changeActive(props.txt);
          nav(props.path);
        }}
      >
        {props.icon}
      </IconButton>
      {props.activeMap[props.txt] ? (
        <Typography
          sx={(theme) => ({ color: theme.palette.primary[900] })}
          fontSize="0.75rem"
          fontWeight={700}
          lineHeight="166%"
        >
          {props.txt}
        </Typography>
      ) : (
        ""
      )}
    </Stack>
  );
};

export default Item;
