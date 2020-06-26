import React, { useState, useEffect } from "react";
import { globalStyles } from "./styles";
import AsyncStorage from "@react-native-community/async-storage";
import { View, Switch, Text, StyleSheet, ToastAndroid } from "react-native";
import { Picker } from "@react-native-community/picker";

export default Settings = () => {
  const [sortBy, setSortBy] = useState();

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@ordering", value);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@ordering");
      if (value !== null) {
        setSortBy(value);

      } else {
        setSortBy('empatijos-bendruomene'); //default value
      }
    } catch (e) {
      console.log(e)
    }
  };



  useEffect(() => {
    getData();
    console.log(sortBy);
  }, [sortBy]);

  return (
    <View style={{ ...globalStyles.container }}>
      
      <View style={{ ...globalStyles.card }}>
        <View style={{ ...globalStyles.cardContent }}>
          <Text style={{ ...globalStyles.titleText }}>Rūšiavimas pagal:</Text>
          <Picker
            style={{ width: 250 }}
            selectedValue={sortBy}
            onValueChange={(itemValue, itemIndex) => {
              setSortBy(itemValue);
              storeData(itemValue);
            }}
          >
            <Picker.Item
              label="Empatijos bendruomene"
              value="empatijos-bendruomene"
            />
            <Picker.Item 
              label="Empatijos magija" 
              value="empatijos-magija" 
            />
              <Picker.Item 
              label="Center for Non Violent Communication " 
              value="cnvc" 
            />
          </Picker>
          {__DEV__ ? <Text>sorting by: {sortBy}</Text>: null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  align: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    alignItems: "center",
    backgroundColor: "#EAECEE",
    borderColor: "#ABB2B9",
    borderWidth: 0.3,
    width: "90%",
  },
});
