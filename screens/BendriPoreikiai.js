import React, {useState, useEffect} from 'react'
import { SafeAreaView, View, ScrollView, StyleSheet, Text } from 'react-native';

import {NEEDS_COMMON_IEVA, NEEDS_COMMON_ROL, NEEDS_COMMON_CNVC} from "../data";

import { globalStyles } from "./styles";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import AsyncStorage from "@react-native-community/async-storage";



  const elementItem = (item) => {
    return (
      <View style={globalStyles.cardContent}   key={item}>
        <Text style={{...globalStyles.titleSubSub, ...globalStyles.separatorBottom}} >{item}</Text>
      </View>

    )
   
  };

  const renderItem = (item) => (
    <Collapse key={item.title}>
  
      <CollapseHeader  >
      <View style={globalStyles.card}>
        <View style={globalStyles.cardContent}  >
          <Text style={globalStyles.titleText} >{item.title}</Text>
        </View>
        </View>
      </CollapseHeader>
      <CollapseBody  >
            {item.elements.map((el) => elementItem(el) )}
      </CollapseBody>
    </Collapse>
  );

export default function BendriPoreikiai() {
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


  const displayData = (sortBy) => {
      let NEEDS_COMMON = null
      {__DEV__ ? console.log("displayData function sortBy value: " +  + sortBy): null}
      if (sortBy === 'empatijos-bendruomene') {
        NEEDS_COMMON = NEEDS_COMMON_ROL
      }
      else if (sortBy === 'empatijos-magija') {
        NEEDS_COMMON = NEEDS_COMMON_IEVA
      }
      else if  (sortBy === 'cnvc') {
        NEEDS_COMMON = NEEDS_COMMON_CNVC
      }
      else { //default value
        NEEDS_COMMON = NEEDS_COMMON_ROL
      }
      return NEEDS_COMMON.map(renderItem)
  } 

  useEffect(() => {
    getData();
    if(__DEV__){
      console.log("Bendri poreikiai: sortby: " + sortBy)
    }
  }, [sortBy]);

    return (
      <View style={globalStyles.container}>
      {__DEV__ ? <Text>sorting by: {sortBy}</Text>: null}
      <ScrollView>
          {  displayData(sortBy) }
        </ScrollView>
        </View>
      );
}

const styles = StyleSheet.create({
  titleSub: {
    fontSize: 17,
        fontFamily: 'nunito-regular',

  },

});

