import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Load from './pages/Load';
import SelectPlayer from './pages/SelectPlayer';
import Recommend from './pages/Recommend';
import WaitingForPlayerScore from './pages/WaitingForPlayerScore';
import PlayerItem from './components/PlayerItem';

const RootNavigation = () => {

    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Recommend'>
            <Stack.Screen 
            name="Recommend"
            component={Recommend}
            options={{ headerShown: false }}
            />
            <Stack.Screen 
            name="Load"
            component={Load}
            options={{ headerShown: false }}
            />
            <Stack.Screen 
            name="SelectPlayer"
            component={SelectPlayer}
            options={{ headerShown: false }}
            />
            <Stack.Screen 
            name="WaitingForPlayerScore"
            component={WaitingForPlayerScore}
            options={{ headerShown: false }}
            />
            <Stack.Screen 
            name="PlayerItem"
            component={PlayerItem}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>  
     </NavigationContainer>
  )
}

export default RootNavigation