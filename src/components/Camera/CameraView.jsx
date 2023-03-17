import React from "react";
import { Grid, Box, IconButton } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./style";
import { Video } from "./style";

// CameraView is responsible for displaying the video and stop camera button
const CameraView = ({ videoRef, stopCamera, startCamera }) => {
  const [isPlaying, setIsPlaying] = React.useState(true);

  const handlePlayPause = () => {
    if (isPlaying) {
      stopCamera();
      setIsPlaying(false);
    } else {
      startCamera();
      setIsPlaying(true);
    }
    
  };

  return (
    <Grid container>
      <Grid item xl={12} xs={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Video ref={videoRef} autoPlay />
          <IconButton
            color="white"
            onClick={handlePlayPause}
            sx={{
              position: "absolute",
              top: "35vh",
              zIndex: 999,
              opacity: 0,
              "&:hover": {
                opacity: 1,
              },
            }}
          >
            {isPlaying ? (
              <PauseIcon sx={{ width: "50px", height: "50px" }} />
            ) : (
              <PlayArrowIcon sx={{ width: "50px", height: "50px" }} />
            )}
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CameraView;
