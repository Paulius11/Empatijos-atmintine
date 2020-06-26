import React from "react";
import { globalStyles } from "./styles";
import { Foundation } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Linking from "expo-linking";

export default About = () => {
  return (
    <View style={globalStyles.container}>
      <View style={{ ...globalStyles.card }}>
        <View style={{ ...globalStyles.cardContent, ...styles.align }}>
          <Text>Ačiū: </Text>
          <TouchableOpacity
            style={{ ...globalStyles.card, ...styles.linkSpace }}
            onPress={() =>
              Linking.openURL("http://www.empatijosbendruomene.lt")
            }
          >
            <Text>Empatijosbendruomene.lt</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...globalStyles.card, ...styles.linkSpace }}
            onPress={() =>
              Linking.openURL("https://www.facebook.com/empatijosmagija")
            }
          >
            <Text>Empatijos magijai</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ ...globalStyles.card, ...styles.linkSpace }}
            onPress={() => Linking.openURL("https://www.cnvc.org/")}
          >
            <Text>cnvc.org</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={globalStyles.card}>
        <View style={{ ...globalStyles.cardContent, ...styles.align }}>
          <Text>Įvertinkite aplikaciją: </Text>

          <Foundation
            name="heart"
            size={42}
            color="red"
            style={styles.topSpace}
            onPress={() =>
              Linking.openURL(
                "https://play.google.com/store/apps/details?id=nvc.atmintine"
              )
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleSub: {
    fontSize: 17,
    fontFamily: "nunito-regular",
  },
  container: {
    flex: 1,
    paddingTop: 300,
  },
  align: {
    alignItems: "center",
  },
  linkSpace: {
    padding: 15,
  },
  topSpace: {
    paddingTop: 10,
  },
});
