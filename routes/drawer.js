import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import homeNavigator from './homeStack';
import settingsStack from './settingsStack';
import aboutNavigator from './aboutStack';


const Drawer = createDrawerNavigator();

export default function drawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Namai" component={homeNavigator} />
                <Drawer.Screen name="Nustatymai" component={settingsStack} />
                <Drawer.Screen name="Apie" component={aboutNavigator} />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}