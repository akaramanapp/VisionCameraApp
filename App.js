import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
} from 'react-native';

import {
  useCameraDevices,
  Camera
} from 'react-native-vision-camera';


function App() {

  const [permissions, setPermissions] = useState(null)

  useEffect(() => {
    Camera.getCameraPermissionStatus().then(() => {
      setPermissions(true)
    })
  },[])

  const devices = useCameraDevices('wide-angle-camera')
  const device = devices['back'];

  if (!device || !permissions) {
    return null
  }

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    />
  )
}

export default App;
