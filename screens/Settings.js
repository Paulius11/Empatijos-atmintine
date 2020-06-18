import React, { useState, useEffect } from "react";
import { globalStyles } from "./styles";
import AsyncStorage from "@react-native-community/async-storage";
import { View, Switch, Text, StyleSheet, ToastAndroid } from "react-native";
import { Picker } from "@react-native-community/picker";

export default Settings = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [sortBy, setSortBy] = useState();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
      
{/*       
      <View style={{ ...globalStyles.card }}>
        <View style={{ ...styles.align, ...globalStyles.cardContent }}>
          <Text style={{ ...globalStyles.titleText }}>Gera nuotaika</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View> */}

      <View style={{ ...globalStyles.card }}>
        <View style={{ ...globalStyles.cardContent }}>
          <Text style={{ ...globalStyles.titleText }}>Rušiavimas pagal:</Text>
          <Picker
            style={{ width: 250 }}
            selectedValue={sortBy}
            onValueChange={(itemValue, itemIndex) => {
              setSortBy(itemValue);
              storeData(itemValue);
            }}
          >
            <Picker.Item
              label="Empatijosbendruomene.lt"
              value="empatijos-bendruomene"
            />
            <Picker.Item 
              label="Empatijosmagija" 
              value="empatijos-magija" 
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
