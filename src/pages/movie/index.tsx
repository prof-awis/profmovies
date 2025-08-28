// import React from "react";

import { Box, Pagination, Stack } from "@mui/material";
import LinedTitle from "../../components/common/LinedTitle";
import MediaCard from "../../components/common/MediaCard";

const Movie = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        paddingX: 9,
        paddingY: 0,
        paddingBottom: 6,
        gap: 8,
      }}
    >
      <Box>
        <LinedTitle Title="Movies" />
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
            justifyContent: "space-between",
            "& > *": {
              width: 320, // or your preferred width
              flexShrink: 0,
            },
          }}
        >
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
          <Stack spacing={1} sx={{ color: "#fff" }}>
            <Pagination
              count={20}
              shape="rounded"
              size="large"
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#fff",
                  backgroundColor: "#f00",
                },
                "& .Mui-selected": {
                  backgroundColor: "#000 !important",
                  color: "#fff !important",
                },
              }}
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Movie;
