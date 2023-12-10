import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import logo from "../../Images/logos/logo.png";
import navConfig from "./config";

interface HeaderProps {}

const ColorButton = styled(Button)(() => ({
  color: "#fff",
  width: 170,
  height: 54,
  fontWeight: 700,
  fontSize: "16px",
  textTransform: "capitalize",
  backgroundColor: "#f04040",
  border: "2px solid #f04040",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#f04040",
    borderColor: "#f04040",
  },
}));
const ColorButton2 = styled(Button)(() => ({
  color: "#fff",
  width: 170,
  height: 54,
  fontWeight: 700,
  fontSize: "16px",
  textTransform: "capitalize",
  backgroundColor: "#f04040",
  borderColor: "#f04040",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#f04040",
    borderColor: "#f04040",
  },
}));

const Header: React.FC<HeaderProps> = () => {
  const theme = useTheme();

  const [state, setState] = useState<{ right: boolean }>({
    right: false,
  });

  const handleDrawerClose = () => {
    setState({ right: false });
  };

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        (event as React.KeyboardEvent).key === "Tab" &&
        (event as React.KeyboardEvent).key === "Shift"
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: string) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navConfig.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton href={text.path}>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      marginBottom={{ xs: 2, sm: 0 }}
      marginTop={{ xs: 2, sm: 0 }}
      id="back-to-top-anchor"
    >
      <Box
        sx={{ display: { xs: "none", md: "flex" } }}
        marginLeft={{ xs: "0%", sm: "0%" }}
        width={"20%"}
      >
        <Box component="a" href="/" title="LovingSitter">
          <img src={logo} alt="logo" width={"100%"} />
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems={"center"}
        width={{ xs: "100%", sm: "45%" }}
        justifyContent={"space-between"}
        marginRight={{ xs: "0%", sm: "0%" }}
      >
        <Box
          sx={{ display: { xs: "none", md: "flex" } }}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
          fontWeight={600}
        >
          <Box>
            <Link
              underline="always"
              component="a"
              href="/about-us"
              color={"#000"}
              fontWeight={500}
            >
              Become a sitter
            </Link>
          </Box>
          <Box
            display={"flex"}
            marginLeft={{ xs: "0%", sm: "0%" }}
            justifyContent={"space-between"}
            // flexWrap={"wrap"}
            width={{ xs: "100%", sm: "50%" }}
          >
            <Box padding={{ xs: "5% 0% 1% 1%", sm: "5% 0% 1% 0%" }}>
              <ColorButton variant="contained" size="medium" href={"/login"}>
                Login
              </ColorButton>
            </Box>
            <Box
              padding={{ xs: "5% 2% 1% 1%", sm: "5% 2% 1% 4%" }}
              display={{ xs: "none", sm: "block" }}
            >
              <ColorButton2 variant="contained" size="medium" href={"/signup"}>
                Sign Up
              </ColorButton2>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }} width={"100%"}>
          <div>
            <AppBar
              position="fixed"
              //   zIndex={theme.zIndex.drawer + 1}
              //   sx={{
              //     backgroundColor: theme.palette.background.paper,
              //   }}
            >
              <Toolbar>
                <Box
                  component="a"
                  href="/"
                  title="LovingSitter"
                  width={"100%"}
                  marginRight={23}
                  marginTop={2}
                  marginBottom={2}
                >
                  <Box
                    component="img"
                    height={"4vh"}
                    sx={{
                      display: "block",
                      position: "relative",
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={logo}
                    alt={"logo"}
                  />
                </Box>
                {["right"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <IconButton onClick={toggleDrawer(anchor, true)}>
                      <MenuIcon fontSize="large" sx={{ color: "#5BB318" }} />
                    </IconButton>
                    <SwipeableDrawer
                      //   anchor={anchor}
                      //   open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                          <CloseIcon sx={{ color: "#379237" }} />
                        </IconButton>
                      </DrawerHeader>
                      <Divider />
                      {list(anchor)}
                      <Divider />
                    </SwipeableDrawer>
                  </React.Fragment>
                ))}
              </Toolbar>
            </AppBar>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
