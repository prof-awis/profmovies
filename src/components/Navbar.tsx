// import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Movies", path: "/movies" },
  { name: "TV Series", path: "/tv-series" },
  { name: "Bookmarks", path: "/bookmarks" },
];
const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      color={"#fff"}
      padding={3}
      paddingX={6}
    >
      <Box>Logo</Box>
      <Box sx={{ display: "flex", gap: 16 }}>
        {navLinks.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: pathname === item.path ? "#f00" : "#fff",
            }}
          >
            <Typography>{item.name}</Typography>
          </Link>
        ))}
      </Box>
      <Box>Sign In Buttons</Box>
    </Box>
  );
};

export default Navbar;
