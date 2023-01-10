import { styled } from "@mui/material/styles";
import myTheme from "./theme";
import Button from "@mui/material/Button";

export const GreenBtn = styled(Button)(({ theme }) => ({
  color: myTheme.palette.text.white,
  backgroundColor: myTheme.palette.primary.light,
  padding: "10px 40px",
  borderRadius: "100px",

  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));
