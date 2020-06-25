import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import {NEEDS_MET_IEVA, NEEDS_UNMET_IEVA, NEEDS_MET_ROL, NEEDS_UNMET_ROL, NEEDS_MET_CNVC, NEEDS_UNMET_CNVC}  from "../data";
import { globalStyles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";



export default function PoreikiaiPN() {
  const [sortBy, setSortBy] = useState();


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

  const displayDataMet = (sortBy) => {
    let NEEDS_COMMON = null
    if (sortBy === 'empatijos-bendruomene') {
      NEEDS_COMMON = NEEDS_MET_ROL
    }
    else if (sortBy === 'empatijos-magija') {
      NEEDS_COMMON = NEEDS_MET_IEVA
    }
    else if  (sortBy === 'cnvc') {
      NEEDS_COMMON = NEEDS_MET_CNVC
    }
    else { //default value
      NEEDS_COMMON = NEEDS_MET_ROL
    }
    return NEEDS_COMMON.map(renderItem)
} 

const displayDataNotMet = (sortBy) => {
  let NEEDS_COMMON = null
  if (sortBy === 'empatijos-bendruomene') {
    NEEDS_COMMON = NEEDS_UNMET_ROL
  }
  else if (sortBy === 'empatijos-magija') {
    NEEDS_COMMON = NEEDS_UNMET_IEVA
  }
  else if  (sortBy === 'cnvc') {
    NEEDS_COMMON = NEEDS_UNMET_CNVC
  }
  else { //default value
    NEEDS_COMMON = NEEDS_UNMET_ROL
  }
  return NEEDS_COMMON.map(renderItem)
} 


  useEffect(() => {
    getData();
    if(__DEV__){
      console.log(sortBy)
    }

  }, [sortBy]);


  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <View>
        {__DEV__ ? <Text>sorting by: {sortBy}</Text>: null}
          <View style={globalStyles.card}>
            <Collapse>
              <CollapseHeader>
                <View
                  style={
                    (globalStyles.cardContent,
                    { alignItems: "center", marginTop: 1 })
                  }
                >
                  <Text style={globalStyles.titleText}>
                    Patenkinti poreikiai
                  </Text>
                  <AntDesign name="down" size={24} color="black" />
                </View>
              </CollapseHeader>
              <CollapseBody>{  displayDataMet(sortBy) }</CollapseBody>
            </Collapse>
          </View>

          <View style={globalStyles.card}>
            <Collapse>
              <CollapseHeader>
                <View
                  style={
                    (globalStyles.cardContent,
                    { alignItems: "center", marginTop: 5 })
                  }
                >
                  <Text style={globalStyles.titleText}>
                    Nepatenkinti poreikiai
                  </Text>
                  <AntDesign name="down" size={24} color="black" />
                </View>
              </CollapseHeader>
              <CollapseBody>{  displayDataNotMet(sortBy) }</CollapseBody>
            </Collapse>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const renderItem = (item) => (
  <Collapse key={item.title}>
    <CollapseHeader
      style={item.needs === "met" ? styles.cardNeedsMet : styles.cardNeedsUnMet}
    >
      <View style={globalStyles.cardContent}>
        <Text style={styles.titleSub}>{item.title}</Text>
      </View>
    </CollapseHeader>
    <CollapseBody>{item.elements.map((el) => elementItem(el))}</CollapseBody>
  </Collapse>
);

const elementItem = (item) => {
  return (
    <View style={globalStyles.cardContent} key={item}>
      <Text
        style={{ ...globalStyles.titleSubSub, ...globalStyles.separatorBottom }}
        key={item}
      >
        {item}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleSub: {
    fontSize: 17,
    fontFamily: "nunito-regular",
  },

  cardNeedsMet: {
    borderRadius: 3,
    elevation: 3,
    backgroundColor: "lightblue",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 8,
    marginVertical: 7,
  },
  cardNeedsUnMet: {
    borderRadius: 3,
    elevation: 3,
    backgroundColor: "lightpink",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 7,
  },
});
