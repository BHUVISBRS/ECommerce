import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",

  width: "180px",
  height: "50px",
  padding: "10px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "black",
  color: "white",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "white",
    boxShadow: "none",
    border: "1px solid black",
    color: "black",
  },
});

export default function OneButton() {
  return (
    <Stack spacing={4} direction="row">
      <BootstrapButton variant="contained" disableRipple>
        Add to Cart
      </BootstrapButton>
    </Stack>
  );
}
