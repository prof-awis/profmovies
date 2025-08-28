// import React from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../assets/profmovies.webp";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", gap: 36 }}
        color={"#fff"}
        paddingX={9}
        paddingY={12}
      >
        <Box sx={{ flex: 1 }}>
          <Box
            component={"img"}
            src={Logo}
            sx={{ height: "auto", width: "150px" }}
            marginBottom={2}
          />
          <Box>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography fontSize={20} fontWeight={"bold"} marginBottom={3}>
            Categories
          </Typography>
          <Typography
            fontSize={16}
            marginBottom={2}
            sx={{
              cursor: "pointer",
              ":hover": { color: "#f00" },
            }}
          >
            Movies{" "}
          </Typography>
          <Typography
            fontSize={16}
            marginBottom={2}
            sx={{
              cursor: "pointer",
              ":hover": { color: "#f00" },
            }}
          >
            Tv-Series
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography fontSize={20} fontWeight={"bold"} marginBottom={3}>
            About
          </Typography>
          <Typography fontSize={16} marginBottom={2}>
            Website{" "}
          </Typography>
          <Typography
            fontSize={16}
            marginBottom={2}
            sx={{
              cursor: "pointer",
              ":hover": { color: "#f00" },
            }}
          >
            Terms and Condition
          </Typography>
          <Typography
            fontSize={16}
            marginBottom={2}
            onClick={() => {
              window.location.href = "mailto:";
            }}
            sx={{
              cursor: "pointer",
              ":hover": { color: "#f00" },
            }}
          >
            Contact Us
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ backgroundColor: "#f00" }}
        color={"#fff"}
        padding={0}
        textAlign="center"
      >
        <Typography fontWeight={"bold"} padding={1} fontSize={10}>
          Copyright © {new Date().getFullYear()} ProfMovies. All rights
          reserved.{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
