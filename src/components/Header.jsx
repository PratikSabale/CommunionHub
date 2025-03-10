import {
  Box,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Applogo from "../assets/Communion-Logo.png";
import { CaretRight, List, X } from "phosphor-react";
import { Link } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [submenuAnchors, setSubmenuAnchors] = useState({});

  const handleOpenSubMenu = (event, menuTitle) => {
    setSubmenuAnchors((prev) => ({
      ...prev,
      [menuTitle]: prev[menuTitle] ? null : event.currentTarget,
    }));
  };

  const handleCloseSubMenu = (menuTitle) => {
    setSubmenuAnchors((prev) => ({
      ...prev,
      [menuTitle]: null,
    }));
  };

  const headerMenu = [
    { title: "Home", icon: null, route: "/" },
    {
      title: "Communities",
      icon: <CaretRight size={10} weight="bold" />,
      route: "/",
      subMenu: [
        { title: "Discover Communities", route: "/" },
        { title: "Create a Community", route: "/" },
      ],
    },
    {
      title: "Events",
      icon: <CaretRight size={10} weight="bold" />,
      route: "/",
      subMenu: [
        { title: "Upcoming Events", route: "/" },
        { title: "Create Event", route: "/" },
      ],
    },
    {
      title: "Leaders",
      icon: <CaretRight size={10} weight="bold" />,
      route: "/",
      subMenu: [{ title: "View Leaders", route: "/" }],
    },
    {
      title: "Support",
      icon: <CaretRight size={10} weight="bold" />,
      route: "/",
      subMenu: [
        { title: "Help Request", route: "/" },
        { title: "Help Request Form", route: "/" },
      ],
    },
  ];

  return (
    <Box
      p={3}
      sx={{
        width: "100vw",
        height: "auto",
        boxShadow: "0px 0px 0px 1px rgb(0, 0, 0, 0.25)",
      }}
    >
      <Stack
        direction="row"
        spacing={10}
        alignItems="center"
        justifyContent="space-evenly"
      >
        {/* Logo */}
        <Box sx={{ cursor: "pointer" }}>
          <img src={Applogo} alt="Communion-Logo" />
        </Box>

        {/* Desktop Menu */}
        {!isMobileOrTablet && (
          <Stack direction="row" spacing={5} alignItems="center">
            {headerMenu.map((menu) => (
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                key={menu.title}
                onClick={(event) =>
                  menu.subMenu && handleOpenSubMenu(event, menu.title)
                }
                sx={{ cursor: "pointer" }}
              >
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  component={Link}
                  to={menu.route}
                >
                  {menu.title}
                </Typography>
                {menu.icon}

                {/* Submenu Dropdown */}
                {menu.subMenu && (
                  <Menu
                    anchorEl={submenuAnchors[menu.title]}
                    open={Boolean(submenuAnchors[menu.title])}
                    onClose={() => handleCloseSubMenu(menu.title)}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                  >
                    {menu.subMenu.map((submenu, index) => (
                      <MenuItem
                        key={index}
                        onClick={() => handleCloseSubMenu(menu.title)}
                        component={Link}
                        to={submenu.route}
                      >
                        {submenu.title}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Stack>
            ))}
          </Stack>
        )}

        {/* Mobile Menu Icon */}
        {isMobileOrTablet && (
          <IconButton onClick={() => setOpenDrawer(true)}>
            <List size={32} weight="bold" />
          </IconButton>
        )}
      </Stack>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" fontWeight="bold">
              Menu
            </Typography>
            <IconButton onClick={() => setOpenDrawer(false)}>
              <X size={32} weight="bold" />
            </IconButton>
          </Stack>

          {/* Drawer Menu Items */}
          <Stack spacing={2} mt={2}>
            {headerMenu.map((menu) => (
              <Stack
                key={menu.title}
                direction="row"
                alignItems="center"
                spacing={1}
              >
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  component={Link}
                  to={menu.route}
                  onClick={() => setOpenDrawer(false)}
                  sx={{ cursor: "pointer" }}
                >
                  {menu.title}
                </Typography>
                {menu.icon}
              </Stack>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
