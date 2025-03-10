import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/Communion-Logo.png";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";

const Footer = () => {
  return (
    <Box
      px={25}
      py={5}
      sx={{ width: "100vw", height: "50vh", backgroundColor: "black" }}
    >
      <Stack direction={"column"} spacing={3}>
        <Stack direction={"row"} spacing={20} justifyContent={"space-evenly"}>
          <Stack direction={"column"} spacing={3}>
            <Box>
              <img src={logo} alt="Communion-Logo" />
            </Box>
            <Stack alignItems={"start"}>
              {" "}
              <Typography variant="body1" sx={{ color: "white" }}>
                Discover the power of connection with Communion.
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                Uniting diverse communities through spirituality and
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                innovation, we foster inclusivity, collaboration,
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                and social cohesion for a better world.
              </Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"start"}>
              <IconButton>
                <FacebookLogo size={32} color="white" />
              </IconButton>
              <IconButton>
                <TwitterLogo size={32} color="white" />
              </IconButton>
              <IconButton>
                <InstagramLogo size={32} color="white" />
              </IconButton>
              <IconButton>
                <YoutubeLogo size={32} color="white" />
              </IconButton>
            </Stack>
          </Stack>
          <Stack direction={"column"} py={1} spacing={3}>
            <Typography
              variant="h5"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Company
            </Typography>

            <Stack spacing={1}>
              <Typography variant="body1" sx={{ color: "white" }}>
                Home
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                Communities
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                Events
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                Leaders
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                Support
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                Profile
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"column"} py={1} spacing={3}>
            <Typography
              variant="h5"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Contact
            </Typography>

            <Stack spacing={1}>
              <Typography variant="body1" sx={{ color: "white" }}>
                contact@communionhub.org
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Box>
          <Divider sx={{ borderColor: "white" }} />
        </Box>

        <Stack py={5} direction={"row"} justifyContent={"space-between"}>
          <Typography variant="body1" sx={{ color: "white", opacity: "0.7" }}>
            Copyright © 2024. All right reserved to Communion
          </Typography>
          <Stack direction={"row"} spacing={5}>
            <Typography variant="body1" sx={{ color: "white", opacity: "0.7" }}>
              Privacy Policy
            </Typography>
            <Typography variant="body1" sx={{ color: "white", opacity: "0.7" }}>
              Terms & Conditions
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
