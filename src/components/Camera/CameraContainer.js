import React, { useEffect, useRef, useState } from "react";
import CameraView from "./CameraView";

// CameraContainer is responsible for handling the camera logic
const CameraContainer = ({ videoRef, setPauseDetection }) => {
  const isMountedRef = useRef(true);

  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    // Call the startCamera function when the component mounts
    startCamera();
  }, []);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      stopCamera();
    };
  }, []);

  // Function to start the camera
  const startCamera = async () => {
    // Check if the browser supports media devices and accessing the camera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        // Request access to the camera
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        // Assign the camera stream to the video element
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        // Log any errors related to accessing the camera
        console.error("Error accessing camera: ", error);
      }
    }
  };

  const stopCamera = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop());
      setMediaStream(null);
    }
  };

  // Render the CameraView component and pass the required props
  return (
    <CameraView
      videoRef={videoRef}
      stopCamera={stopCamera}
      startCamera={startCamera}
    />
  );
};

export default CameraContainer;
