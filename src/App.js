import List from "./List";
import people from "./data";
import { Paper, Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./mui/theme";
import { GreenBtn } from "./mui/MyButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const App = () => {
  const [birthdayPips, setBirthdayPips] = useState(people);

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          width: "100%",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            p: 2,
            width: "45%",
            bgcolor: theme.palette.primary.main,
          }}
        >
          <Typography
            color="#fff"
            variant="h3"
            align="center"
            sx={{ my: 2 }}
          >{`${birthdayPips.length} birthdays today`}</Typography>
          <List people={birthdayPips} />
          <GreenBtn
            variant="contained"
            endIcon={<DeleteIcon />}
            onClick={() => {
              setBirthdayPips([]);
            }}
          >
            Clear
          </GreenBtn>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
