import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import CertifiedIcon from "../assets/SvgIcon";
import homePage1 from "../assets/HomePage1.jpg";
import { faker } from "@faker-js/faker";
import { ArrowRight } from "phosphor-react";
import homePage2 from "../assets/HomePage2.jpg";
import homePage3 from "../assets/HomePage3.jpg";
import homePage4 from "../assets/HomePage4.jpg";

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      p={{ xs: 3, md: 10 }}
      sx={{ width: "100%", height: "auto", overflowX: "hidden" }}
    >
      <Stack pt={5} direction={"column"} spacing={2}>
        <Stack
          p={{ xs: 2, md: 5 }}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            variant={isMobile ? "h4" : "h2"}
            sx={{ fontWeight: "bold" }}
          >
            Connect Communities
          </Typography>
          <Typography
            variant={isMobile ? "body1" : "h6"}
            sx={{ opacity: 0.5, textAlign: "center" }}
          >
            Bridging gaps between faiths with tech and a dash of fun!
          </Typography>
        </Stack>

        {/* Content Section */}
        <Stack
          px={{ xs: 2, md: 20 }}
          direction={isMobile ? "column" : "row"}
          spacing={3}
        >
          {/* Left Section */}
          <Box flex={isMobile ? 1 : 0.4} width={"100%"}>
            <Stack direction={"column"} alignItems={"start"} spacing={2}>
              <Box
                p={1}
                sx={{
                  borderRadius: 10,
                  backgroundColor: "#cfe6fc",
                  width: "fit-content",
                }}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <CertifiedIcon />
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.primary.dark,
                      fontWeight: "bold",
                    }}
                  >
                    Unlimited Advantages
                  </Typography>
                </Stack>
              </Box>

              <Stack
                direction={isMobile ? "column" : "row"}
                alignItems={"center"}
                spacing={1}
              >
                <Typography
                  variant={isMobile ? "h4" : "h3"}
                  sx={{ fontWeight: "bold" }}
                >
                  Unite, Innovate,
                </Typography>
                <Box sx={{ width: isMobile ? "50px" : "20%" }}>
                  <img
                    src={homePage1}
                    alt="princes"
                    width="100%"
                    style={{ borderRadius: "100px" }}
                  />
                </Box>
              </Stack>

              <Stack
                direction={isMobile ? "column" : "row"}
                spacing={1}
                alignItems={"center"}
              >
                <AvatarGroup spacing={isMobile ? 20 : 40}>
                  <Avatar
                    alt="Remy Sharp"
                    src={faker.image.avatar()}
                    sx={{ width: 48, height: 48 }}
                  />
                  <Avatar
                    alt="Travis Howard"
                    src={faker.image.avatar()}
                    sx={{ width: 48, height: 48 }}
                  />
                </AvatarGroup>
                <Typography
                  variant={isMobile ? "h4" : "h3"}
                  sx={{ fontWeight: "bold" }}
                >
                  Connect, Inspire
                </Typography>
              </Stack>

              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Typography
                  variant={isMobile ? "h4" : "h3"}
                  sx={{ fontWeight: "bold" }}
                >
                  Together
                </Typography>
                <Box
                  p={1}
                  sx={{ borderRadius: 20, backgroundColor: "#cfe6fc" }}
                >
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <AvatarGroup spacing={10}>
                      <Avatar
                        alt="User1"
                        src={faker.image.avatar()}
                        sx={{ width: 32, height: 32 }}
                      />
                      <Avatar
                        alt="User2"
                        src={faker.image.avatar()}
                        sx={{ width: 32, height: 32 }}
                      />
                      <Avatar
                        alt="User3"
                        src={faker.image.avatar()}
                        sx={{ width: 32, height: 32 }}
                      />
                    </AvatarGroup>
                    <Typography sx={{ fontSize: isMobile ? "12px" : "16px" }}>
                      + 8 people
                    </Typography>
                  </Stack>
                </Box>
              </Stack>

              <Box pt={3} textAlign={isMobile ? "center" : "left"}>
                <Typography>
                  Join us to be part of a community where spirituality meets
                  innovation.
                </Typography>
                <Typography>
                  Together, we'll build a more inclusive, engaging world!
                </Typography>
              </Box>

              <Box
                pt={3}
                sx={{ width: "100%", textAlign: isMobile ? "center" : "left" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 10,
                    textTransform: "none",
                    fontWeight: "bold",
                    backgroundColor: "black",
                    padding: 1.5,
                    width: isMobile ? "100%" : "50%",
                  }}
                >
                  View Our Services <ArrowRight weight="bold" size={20} />
                </Button>
              </Box>
            </Stack>
          </Box>

          {/* Right Section (Images) */}
          <Box flex={isMobile ? 1 : 0.6} p={1}>
            <Stack
              direction={isMobile ? "column" : "row"}
              spacing={1}
              alignItems="center"
              justifyContent="center"
            >
              <Stack
                direction="column"
                justifyContent="flex-end"
                sx={{ height: isMobile ? "auto" : "55vh" }}
              >
                <Box>
                  <img
                    src={homePage2}
                    alt="box1"
                    style={{
                      borderRadius: "48%",
                      width: isMobile ? "100px" : "auto",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                direction="column"
                justifyContent="center"
                sx={{ height: isMobile ? "auto" : "55vh" }}
              >
                <Box>
                  <img
                    src={homePage3}
                    alt="box2"
                    style={{
                      borderRadius: "48%",
                      width: isMobile ? "100px" : "auto",
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                direction="column"
                justifyContent="flex-start"
                sx={{ height: isMobile ? "auto" : "55vh" }}
              >
                <Box>
                  <img
                    src={homePage4}
                    alt="box3"
                    style={{
                      borderRadius: "48%",
                      width: isMobile ? "100px" : "auto",
                    }}
                  />
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomePage;
