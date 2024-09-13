import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { gifs } from '../constants';
import BackgroundChinaTown from '../components/BackgroundChinaTown';
import PlayerItem from '../components/PlayerItem';
import LinearGradient from 'react-native-linear-gradient'; 
import { useNavigation } from '@react-navigation/native';

const WaitingForPlayerScore = ({ route }) => {

  const { player } = route.params;
  const navigation = useNavigation();

  const handleBackPreviousPage = () => {
    navigation.goBack();  
  }
  
  return (
    <View style={styles.container}>
      <BackgroundChinaTown video={gifs.WaitingRoom} />
      <View style={styles.overlay}>
        <Text style={styles.title}>WAITING FOR PLAYERS?</Text>

        <View style={styles.statusPlayer}>
            {Array(player).fill().map((_, index) => (
              <PlayerItem key={index} player={index + 1} />
            ))}
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

export default WaitingForPlayerScore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 40,
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#E84811',
    marginBottom: 40,
  },
  statusPlayer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginLeft: 30

  },
  touchableOpacity: {
    borderRadius: 50,
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
  }
});