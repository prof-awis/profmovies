// import React from 'react'

import { Box, Typography } from "@mui/material";

interface LinedTitleProps {
  Title: string;
}

const LinedTitle = ({ Title }: LinedTitleProps) => {
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          display: "inline-block",
          borderBottom: "2px solid #f00",
          paddingBottom: 0.5,
          marginBottom: 4,
        }}
        // fontStyle={"italic"}
        fontWeight={"bold"}
      >
        {Title}
      </Typography>
    </Box>
  );
};

export default LinedTitle;
