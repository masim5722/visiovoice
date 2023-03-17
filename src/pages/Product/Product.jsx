import React, { useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import CameraContainer from "../../components/Camera/CameraContainer.js";
import ObjectDetectionContainer from "../../components/ObjectDetector/ObjectDetectionContainer.js";
import ObjectReaderContainer from "../../components/ObjectReader/ObjectReaderContainer.js";
import DesktopAppBar from "../../components/reuseable/DesktopAppBar/DesktopAppBar";
// Product Page Component
const Product = () => {
  // Use effect to set the browser page title
  useEffect(() => {
    // Set the browser page title
    document.title = "VisioVoice - Product";
  }, []);

  // Create a reference to the video element
  const videoRef = useRef(null);

  return (
    <Grid container>
      <DesktopAppBar showSocialIcons={false} />
      {/* Page title */}
      <Grid item xl={12} xs={12} position="relative" mt={"32px"}>
        <CameraContainer videoRef={videoRef} />
        <ObjectDetectionContainer videoRef={videoRef}>
          {(detectedObjects, handleSpeechCompleted, setPauseDetection) => (
            <ObjectReaderContainer
              detectedObjects={detectedObjects}
              onSpeechCompleted={handleSpeechCompleted}
              setPauseDetection={setPauseDetection}
            />
          )}
        </ObjectDetectionContainer>
      </Grid>
      <DesktopAppBar showSocialIcons={true} />
    </Grid>
  );
};

export default Product;
