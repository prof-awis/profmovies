import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{ minHeight: "80vh", backgroundColor: "#000000E6" }}
        color={"#fff"}
        padding={3}
        paddingX={6}
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
