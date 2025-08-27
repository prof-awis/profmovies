import { useEffect, useState } from "react";
import { Box, Button, Slide, Typography } from "@mui/material";
import backgroundImage from "../../assets/images/heroBg.webp";
import image1 from "../../assets/posters/after.jpg";
import image2 from "../../assets/posters/antman.jpg";
import image3 from "../../assets/posters/assassin.jpg";
import image4 from "../../assets/posters/guardian.jpg";

const Home = () => {
  const images = [image1, image2, image3, image4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  console.log(images.length);
  return (
    <Box sx={{}}>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "92vh",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Content to be placed over the background */}
        <Box
          sx={{
            color: "#fff",
            padding: 3,
            paddingLeft: 12,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "inline-block",
              borderBottom: "2px solid #f00",
              paddingBottom: 0.5,
              marginBottom: 4,
            }}
            fontStyle={"italic"}
            fontWeight={"bold"}
          >
            ProfMovies
          </Typography>
          <Typography variant="h3" fontWeight={"bold"}>
            Find your next Favorite Movie
          </Typography>
          <Typography fontSize={15} marginTop={4}>
            Tailored recommendations, trailers, and trending picks
          </Typography>
          <Button
            sx={{
              backgroundColor: "#f00",
              color: "#fff",
              fontWeight: "bold",
              paddingX: 6,
              marginTop: 4,
            }}
          >
            Start Exploring
          </Button>
        </Box>
        <Box
          sx={{
            color: "#fff",
            padding: 3,
            paddingRight: 12,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "inline-block",
              borderBottom: "2px solid #f00",
              paddingBottom: 0.5,
              marginBottom: 4,
            }}
            fontStyle={"italic"}
            fontWeight={"bold"}
          >
            Popular Movies
          </Typography>

          <Slide
            direction="left"
            in={true}
            key={current}
            timeout={1000}
            mountOnEnter
            unmountOnExit
          >
            <Box
              component="img"
              src={images[current]}
              alt={`Sliding Image ${current + 1}`}
              sx={{
                width: 400,
                height: 550,
                borderRadius: 2,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            />
          </Slide>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            {images.map((_, idx) => (
              <Box
                key={idx}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: idx === current ? "#f00" : "#fff",
                  // opacity: idx === current ? 1 : 1,
                  marginX: 0.5,
                  transition: "background-color 0.3s, opacity 0.3s",
                  cursor: "pointer",
                  // border: "1px solid #f00",
                }}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box sx={{ color: "#fff", padding: 3, paddingX: 6 }}>Content Below</Box>
    </Box>
  );
};

export default Home;
