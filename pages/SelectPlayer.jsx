import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BackgroundChinaTown from '../components/BackgroundChinaTown';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { gifs, images } from '../constants';
import FastImage from 'react-native-fast-image';

const SelectPlayer = () => {

  const navigation = useNavigation();
  
  const handleBackPreviousPage = () => {
    navigation.goBack();  
  }

  const handleWaitingRoomPage = (player) => {
    navigation.navigate('WaitingForPlayerScore', {player: player});
  }

  return (
    <View style={styles.container}>
      <BackgroundChinaTown video={gifs.SelectPlayer} />
      <View style={styles.overlay}>
        <Text style={styles.title}>HOW MANY PLAYERS?</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.circleLayout} onPress={() => handleWaitingRoomPage(2)}>
            <FastImage 
            source={images.CircleNumberPlayer}
            style={{ width: 150, height: 150 }}
            />
          <Text style={styles.setText}>
            2
          </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circleLayout} onPress={() => handleWaitingRoomPage(3)}>
            <FastImage 
            source={images.CircleNumberPlayer}
            style={{ width: 150, height: 150 }}
            />
          <Text style={styles.setText}>
            3
          </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circleLayout} onPress={() => handleWaitingRoomPage(4)}>
            <FastImage 
            source={images.CircleNumberPlayer}
            style={{ width: 150, height: 150 }}
            />
          <Text style={styles.setText}>
            4
          </Text>
          </TouchableOpacity>
          
        </View>

        <TouchableOpacity style={styles.touchableOpacity} onPress={() => handleBackPreviousPage()}>
          <LinearGradient
            colors={['#FECB38', '#F89B1A']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>BACK</Text>
            <Text style={styles.backArrow}>◀</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#E84811',
    textAlign: 'center', 
  },
  circleLayout: {
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 5
  },
  setText: {
    position: 'absolute',
    fontSize: 40, 
    color: '#9d081c', 
    fontWeight: 'bold', 
    backgroundColor: 'black', 
    padding: 15, 
    borderRadius: 50, 
    overflow: 'hidden',
    width: 85,
    height: 85,
    textAlign: 'center'
  },
  touchableOpacity: {
    alignSelf: 'flex-end',
    borderRadius: 50,
    marginRight: 20,
    marginTop: 50,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  backButtonText: {
    fontSize: 20,
    color: '#2D033B', 
    fontWeight: 'bold',
    marginRight: 5,
  },
  backArrow: {
    fontSize: 20,
    color: '#2D033B', 
    fontWeight: 'bold',
  },
});