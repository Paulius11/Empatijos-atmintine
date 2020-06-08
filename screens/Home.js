import React, {useState} from "react";
import { globalStyles } from "./styles";
import { View, Button, TouchableOpacity } from "react-native";
import Quate from "../shared/Quote";

export default function Home({ navigation }) {

  const pressHandler = (page) => {
    navigation.push(page);
  };

  const COLOR = "#6099c5";







  return (
    <View style={globalStyles.container}>
   
       <Quate/>

      <View style={globalStyles.button}>
        <Button
          title="Poreikiai"
          color={COLOR}
          onPress={() => pressHandler("PoreikiaiPN")}
        />
      </View>
      <View style={globalStyles.button}>
        <Button
          title="NVC modelis"
          color={COLOR}
          onPress={() => pressHandler("Modelis")}
        />
      </View>

      <View style={globalStyles.button}>
        <Button
          title="Bendražmogiski Poreikiai"
          color={COLOR}
          onPress={() => pressHandler("BendriPoreikiai")}
        />
      </View>
    </View>
  );
}
