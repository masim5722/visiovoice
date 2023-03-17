import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const ObjectDetectionView = ({ detectedObjects, videoRef }) => {
  const canvasRef = useRef(null);

  // Function to draw boxes around detected objects
  const drawBoxes = () => {
    if (videoRef.current && canvasRef.current && detectedObjects.length > 0) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      // Set styles for boxes and text labels
      ctx.lineWidth = 2;
      ctx.font = "16px Arial";
      ctx.textBaseline = "top";

      // Draw boxes and text labels for each detected object
      detectedObjects.forEach((obj) => {
        ctx.strokeStyle = "#00FFFF";
        ctx.fillStyle = "#00FFFF";
        ctx.beginPath();
        ctx.rect(obj.bbox[0], obj.bbox[1], obj.bbox[2], obj.bbox[3]);
        ctx.stroke();
        ctx.fillText(obj.class, obj.bbox[0], obj.bbox[1] - 20);
      });
    }
  };

  // Redraw boxes whenever detectedObjects array changes
  useEffect(() => {
    drawBoxes();
  }, [detectedObjects]);

  // Create comma-separated list of detected object names for display
  const objectNames = detectedObjects.map((obj) => obj.class).join(", ");

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: "52vh",
          zIndex: 1,
          pointerEvents: "none",
        }}
        width={videoRef.current ? videoRef.current.clientWidth : 0}
        height={videoRef.current ? videoRef.current.clientHeight : 0}
      ></canvas>
      {detectedObjects.length > 0 && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: "5vh",
              left: "51vh",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              padding: "0.8rem",
              borderRadius: "0.25rem",
            }}
          >
            <Typography variant="h6" color="black">
              Total objects: {detectedObjects.length}
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "5vh",
              right: "51vh",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              padding: "0.8rem",
              borderRadius: "0.25rem",
            }}
          >
            <Typography variant="h6" color="black" textTransform="capitalize">
              {objectNames}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ObjectDetectionView;
