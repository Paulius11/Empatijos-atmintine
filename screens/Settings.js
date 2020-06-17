import React, { useState } from "react";
import { globalStyles } from "./styles";
import AsyncStorage from '@react-native-community/async-storage';
//TODO
import { View, Switch, Text, StyleSheet } from "react-native";

export default Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={globalStyles.container}>
      <Text>Nustatymai </Text>

      <View>
        <Text>Kažkoks nustatymas</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};
