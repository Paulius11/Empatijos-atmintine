import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../shared/header";
import Settings from "../screens/Settings";

const Stack = createStackNavigator();

export default function settingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#999",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={() => ({
          headerTitle: () => <Header title="Nustatymai" />,
        })}
      />
    </Stack.Navigator>
  );
}
