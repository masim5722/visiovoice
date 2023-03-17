import React, { useEffect, useState } from "react";

const ObjectReaderContainer = ({ detectedObjects }) => {
  const [prevDetectedObjects, setPrevDetectedObjects] = useState([]);

  const objectsAreDifferent = (prevObjects, newObjects) => {
    if (prevObjects.length !== newObjects.length) {
      return true;
    }

    for (let i = 0; i < prevObjects.length; i++) {
      if (prevObjects[i].class !== newObjects[i].class) {
        return true;
      }
    }

    return false;
  };

  const readObjects = () => {
    if (objectsAreDifferent(prevDetectedObjects, detectedObjects)) {
      const objectNames = detectedObjects.map((obj) => obj.class);

      const countUtterance = new SpeechSynthesisUtterance();
      countUtterance.text = `Total objects: ${detectedObjects.length}.`;
      window.speechSynthesis.speak(countUtterance);

      setTimeout(() => {
        objectNames.forEach((name, index) => {
          const utterance = new SpeechSynthesisUtterance();
          utterance.text = `Object ${index + 1}: ${name}.`;
          window.speechSynthesis.speak(utterance);
        });
      }, 2000);
    }
  };

  useEffect(() => {
    if (!window.speechSynthesis.speaking) {
      readObjects();
      setPrevDetectedObjects(detectedObjects);
    }
  }, [detectedObjects]);

  return null;
};

export default ObjectReaderContainer;
