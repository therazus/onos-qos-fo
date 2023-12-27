import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

import { themeTyp, themeNav } from "../../assets/Themes/theme";
import img1 from "../../assets/Open_vSwitch_Logo.svg.png";

const pages = ["Home", "Manage Queue", "Manage Devices", "About"];


function ResponsiveAppBar() {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={themeNav}>
      <AppBar
        position="fixed"
        style={{ background: navbar ? "rgb(207 214 255)" : "transparent" }}
        zIndex={1001}
      >
        <Container
          maxWidth="xl"
        >
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" }, margin: 1.5 }}>
              <img
                alt=""
                src={img1}
                width="100"
                height="70"
              />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                background="black"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <ThemeProvider theme={themeTyp}>
                      <a
                        href={`/#${page}`}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        <Typography
                        variant="NavTyp1"
                        fontextAlign="center">
                          {page}
                        </Typography>
                      </a>
                    </ThemeProvider>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1, mr: 2 }}
            >
              <img
                alt=""
                src={img1}
                width="100"
                height="70"
                className="d-inline-block align-top"
              />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  href={`/#${page}`}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    marginLeft: 5,
                  }}
                >
                  <ThemeProvider theme={themeTyp}>
                    <Typography variant="NavTyp1" fontextAlign="center">
                      {page}
                    </Typography>
                  </ThemeProvider>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;