import { StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image';

const { width, height } = Dimensions.get('window');

const BackgroundChinaTown = ({ video }) => {
  return (
      <FastImage 
      source={video}
      style={styles.backgroundVideo}
      resizeMode='stretch'
      />
  )
}

export default BackgroundChinaTown

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: height
    }
})