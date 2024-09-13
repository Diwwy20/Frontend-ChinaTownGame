import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { gifs, images } from '../constants'
import FastImage from 'react-native-fast-image'

const PlayerItem = ({ player }) => {

  
  return (
    <View>
      <View style={styles.layout}>
          <FastImage 
          source={gifs.LionIcon}
          style={styles.setSizeImage}
          resizeMode='stretch'
          />
          <Image source={images.Ready} style={{ width: 35, height: 35}} />
      </View>
      <Text style={styles.setText}>Player: {player}</Text>
    </View>

  )
}

export default PlayerItem

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  setText: {
    textAlign: 'center',
    marginRight: 30,
    color: '#ffcb54'
  },
  setSizeImage: {
    width: 80,
    height: 80
  }
});
















// import { View, Text, Image } from 'react-native'
// import React from 'react'

// const PlayerItem = ({ number, isReady }) => {
//   return (
//     <View style={styles.playerItem}>
//     <Image 
//       source={require('../assets/lion-dance-mask.png')} 
//       style={styles.playerIcon} 
//     />
//     {isReady ? (
//       <View style={styles.readyIcon} />
//     ) : (
//       <Image 
//         source={require('../assets/loading-icon.png')} 
//         style={styles.loadingIcon} 
//       />
//     )}
//     <Text style={styles.playerText}>Player {number}</Text>
//   </View>
//   )
// }

// export default PlayerItem