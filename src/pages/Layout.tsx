import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "80vh",
          backgroundColor: "#000000E6",
          ...(isHomePage && { padding: 0, paddingX: 0 }),
        }}
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
