import Box from "@mui/material/Box";
import { Avatar, Typography, CardContent } from "@mui/material";
import Card from "@mui/material/Card";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;

        return (
          <Card
            key={id}
            maxWidth="md"
            sx={{ width: "70%", mb: 2, px: 4, py: 2 }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 1,
                alignItems: "center",
              }}
            >
              <Avatar
                src={image}
                sx={{
                  justifySelf: "center",
                  width: 125,
                  height: 125,
                }}
              />
              <CardContent sx={{ justifySelf: "center", ml: -10 }}>
                <Typography>{name}</Typography>
                <Typography>{age}</Typography>
              </CardContent>
            </Box>
          </Card>
        );
      })}
    </>
  );
};

export default List;
