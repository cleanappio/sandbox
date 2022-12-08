import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Camera } from 'expo-camera';

const CameraButton = () => {
  // State to track whether the camera is open or closed
  const [cameraOpen, setCameraOpen] = useState(false);

  // Function to open the camera
  const openCamera = () => {
    setCameraOpen(true);
  }

  // Function to close the camera
  const closeCamera = () => {
    setCameraOpen(false);
  }

  return (
    <View>
      {/* Button to open the camera */}
      <Button title="Open Camera" onPress={openCamera} />

      {/* Camera component */}
      { cameraOpen && (
        <Camera onClose={closeCamera}>
          {/* Text to display when the camera is open */}
          <Text>Camera is open</Text>
        </Camera>
      ) }
    </View>
  );
};
