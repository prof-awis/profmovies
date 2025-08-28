// import * as React from 'react';
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ContentImg from "../../assets/posters/after.jpg";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 360, backgroundColor: "#000", color: "#fff" }}>
      <CardMedia sx={{ height: 420 }} image={ContentImg} title="After" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          After
        </Typography>
        <Typography variant="body2">Action/Drama</Typography>
        <Typography variant="body2" sx={{ color: "#f00", marginTop: 1 }}>
          2011
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
