import React, { useState, useEffect, useRef } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import ObjectDetectionView from "./ObjectDetectionView";

const ObjectDetectionContainer = ({ videoRef, children }) => {
  // Declare state to hold the detected objects
  const [detectedObjects, setDetectedObjects] = useState([]);
  // Declare a ref to hold the model
  const modelRef = useRef(null);

  // Load the model when the component mounts
  const loadModel = async () => {
    modelRef.current = await cocoSsd.load();
  };

  // Detect the objects in the video stream
  const detectObjects = async () => {
    // Check if the video stream and the model have loaded
    if (videoRef.current && modelRef.current) {
      // Make predictions on the video stream
      const predictions = await modelRef.current.detect(videoRef.current);
      // Update the detected objects state
      setDetectedObjects(predictions);
    }
  };

  // Load the model when the component mounts
  useEffect(() => {
    loadModel();
  }, []);

  // Detect objects every 500ms
  useEffect(() => {
    const interval = setInterval(detectObjects, 500);
    return () => clearInterval(interval);
  }, [videoRef.current]);

  return (
    <>
      {/* Render the ObjectDetectionView component to display the detected objects */}
      <ObjectDetectionView
        detectedObjects={detectedObjects}
        videoRef={videoRef}
      />
      {/* Render the children components with the detected objects state */}
      {children(detectedObjects)}
    </>
  );
};

export default ObjectDetectionContainer;
