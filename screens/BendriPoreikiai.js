import React, {useState, useEffect} from 'react'
import { SafeAreaView, View, ScrollView, StyleSheet, Text } from 'react-native';

import {NEEDS_COMMON_IEVA, NEEDS_COMMON_ROL} from "../data";

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


  useEffect(() => {
    getData();
    if(__DEV__){
      console.log(sortBy)
    }

  }, [sortBy]);

    return (
      <View style={globalStyles.container}>
      {__DEV__ ? <Text>sorting by: {sortBy}</Text>: null}
      <ScrollView>
          {sortBy === 'empatijos-bendruomene' ? NEEDS_COMMON_ROL.map(renderItem) : NEEDS_COMMON_IEVA.map(renderItem)}
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

