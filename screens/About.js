import React from "react";
import { globalStyles } from "./styles";

import { View, Text, StyleSheet } from "react-native";

export default About = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Ačiū: </Text>
      <Text>http://empatijosbendruomene.lt</Text>
      <Text>https://www.facebook.com/empatijosmagija</Text>
    </View>
  );
}