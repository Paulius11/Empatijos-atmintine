import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import JausmaiPN from "../screens/JausmaiPN";
import BendriPoreikiai from "../screens/BendriPoreikiai";
import Modelis from "../screens/Modelis";
import Header from "../shared/Header";

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6099c5",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {},
        }}
      >
        <Stack.Screen name="Empatijos Atmintinė" component={Home} 
         options={() => ({
          headerTitle: () => <Header title="Empatijos atmintinė" />,
        })}
      />
        <Stack.Screen
          name="JausmaiPN"
          component={JausmaiPN}
          options={{ title: "Jausmai" }}
        />
        <Stack.Screen
          name="BendriPoreikiai"
          component={BendriPoreikiai}
          options={{ title: "Bendražmogiški Poreikiai" }}
        />
        <Stack.Screen name="Modelis" component={Modelis} />
      </Stack.Navigator>
    </>
  );
}
