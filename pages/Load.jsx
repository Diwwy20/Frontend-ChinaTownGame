import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { gifs } from '../constants';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

const Load = () => {

    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('SelectPlayer'); 
    }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress} activeOpacity={1}>
      <FastImage 
      source={gifs.MainChinaTown}
      style={styles.image}
      resizeMode='stretch'
      />
    </TouchableOpacity>
  );
}

export default Load;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: '100%', 
    height: '100%', 
  },
});