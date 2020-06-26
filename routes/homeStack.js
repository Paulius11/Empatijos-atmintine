import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from "../screens/Home";
import PoreikiaiPN from "../screens/PoreikiaiPN";
import BendriPoreikiai from '../screens/BendriPoreikiai'
import Modelis from '../screens/Modelis'


const Stack = createStackNavigator()

export default function HomeNavigator() {
  return (
    <>
      <Stack.Navigator
      initialRouteName='Home'
       screenOptions={{
        headerStyle: {
          backgroundColor:'#6099c5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        },
      }}
      >
        <Stack.Screen name='Empatijos Atmintinė' component={Home} />
        <Stack.Screen name='PoreikiaiPN'  component={PoreikiaiPN}  options={{ title: 'Jausmai' }}/>
        <Stack.Screen name='BendriPoreikiai'  component={BendriPoreikiai} options={{ title: 'Bendražmogiški Poreikiai' }} />
        <Stack.Screen name='Modelis'  component={Modelis} />
      </Stack.Navigator>
    </>
  );
}