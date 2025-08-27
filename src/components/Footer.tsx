// import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Box color={"#fff"} padding={3} paddingX={6} paddingY={6}>
        <Box>Footer</Box>
        <Box>Footer</Box>
        <Box>Footer</Box>
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
