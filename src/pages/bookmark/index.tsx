// import React from "react";

import { Box } from "@mui/material";
import LinedTitle from "../../components/common/LinedTitle";
import MediaCard from "../../components/common/MediaCard";

const Bookmark = () => {
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
        <LinedTitle Title="Bookmarks" />
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
            justifyContent: "space-between",
            "& > *": {
              width: 320,
              flexShrink: 0,
            },
          }}
        >
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </Box>
      </Box>
    </Box>
  );
};

export default Bookmark;
