import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import Header from "../../components/Header/Header";
import Image from "../../Images/home_bg.jpeg";

const ColorButton = styled(Button)(() => ({
  color: "#fff",
  width: 225,
  height: 65,
  fontWeight: 700,
  fontSize: "16px",
  textTransform: "capitalize",
  backgroundColor: "#f04040",
  border: "2px solid #f04040",
  filter: "drop-shadow(0px 2px 6px rgba(74,106,149,0.2))",
  boxShadow: "none",
  marginRight: "2%",
  "&:hover": {
    color: "#fff",
    borderColor: "#f04040",
    backgroundColor: "#f04040",
  },
}));

const styles = {
  paperContainer: {
    width: "55%",
    height: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};
export default function Homepage(): JSX.Element {
  return (
    <Box>
      <Box position="absolute" width="100%" color="#fff">
        <Header />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box paddingLeft="10rem">
          <Typography
            marginTop="5rem"
            fontSize="3.5rem"
            fontWeight="bold"
            paddingRight="6rem"
            color="#000"
          >
            Find the care your dog deserves
          </Typography>
          <Typography
            variant="body2"
            fontWeight={"600"}
            paddingTop={"5%"}
            gutterBottom
          >
            Where
          </Typography>
          <TextField
            id="search"
            name="location"
            type="text"
            placeholder="Anywhere"
            autoComplete="location"
            variant="outlined"
            color="error"
          />
          <Typography
            variant="body2"
            fontWeight={"600"}
            paddingTop={"5%"}
            gutterBottom
          >
            Drop In/Drop Off
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={{ xs: "100%", sm: "50%" }}
            marginLeft={{ xs: "0%", sm: "0%" }}
            paddingBottom={"4%"}
          >
            <Grid container>
              <Grid item xs={12} sm={6} paddingRight="2%">
                <TextField
                  id="search"
                  name="availability"
                  type="date"
                  autoComplete="availability"
                  variant="outlined"
                  color="error"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="search"
                  name="availability"
                  type="date"
                  autoComplete="availability"
                  variant="outlined"
                  color="error"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
          <ColorButton
            href="/profile-list"
            color="secondary"
            variant="contained"
          >
            Find My Dog Sitter
          </ColorButton>
        </Box>
        <Box style={styles.paperContainer}></Box>
      </Box>
    </Box>
  );
}
