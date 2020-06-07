import React from "react";
import { globalStyles } from "./styles";
import { View, Button} from "react-native";
import Quate from "../shared/Quote";

export default function Home({ navigation }) {
  const pressHandler = (page) => {
    navigation.push(page);
  };
  const color = "#6099c5"

  return (
    <View style={globalStyles.container}>
      <Quate />


      <View style={globalStyles.button} >
        <Button
          title="Poreikiai"
          color={color}
          onPress={() => pressHandler("PoreikiaiPN")}
        />
      </View>
      <View style={globalStyles.button}>
        <Button
          title="NVC modelis"
          color={color}
          onPress={() => pressHandler("Modelis")}
        />
      </View>

      <View style={globalStyles.button}>
        <Button
          title="Bendražmogiski Poreikiai"
          color={color}
          onPress={() => pressHandler("BendriPoreikiai")}
        />
      </View>
    </View>
  );
}
