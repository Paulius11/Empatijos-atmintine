import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import * as myConst from "../data";
import { globalStyles } from "./styles";
import { AntDesign } from '@expo/vector-icons'; 


export default function PoreikiaiPN() {
  return (
    <View style={globalStyles.container}>
    <ScrollView>
      <View >
        <View style={globalStyles.card}>
          <Collapse>
            <CollapseHeader>
              <View style={globalStyles.cardContent, {alignItems: 'center', marginTop: 5}}>
                <Text style={globalStyles.titleText}>Patenkinti poreikiai </Text>
                <AntDesign name="down" size={24} color="black" />
              </View>
            </CollapseHeader>
            <CollapseBody>{myConst.NEEDS_MET.map(renderItem)}</CollapseBody>
          </Collapse>
        </View>

        <View style={globalStyles.card}>
          <Collapse>
            <CollapseHeader>
              <View style={globalStyles.cardContent, {alignItems: 'center', marginTop: 5}}>
                <Text style={globalStyles.titleText}>Nepatenkinti poreikiai</Text>
                <AntDesign name="down" size={24} color="black" />
              </View>
            </CollapseHeader>
            <CollapseBody>{myConst.NEEDS_UNMET.map(renderItem)}</CollapseBody>
          </Collapse>
        </View>
      </View>
      </ScrollView>
      </View>
  );
};

const renderItem = (item) => (
  <Collapse key={item.title}>

    <CollapseHeader style={item.needs === "met"  ? styles.cardNeedsMet : styles.cardNeedsUnMet }  >
      <View style={globalStyles.cardContent}  >
        <Text style={styles.titleSub}>{item.title}</Text>
      </View>
    </CollapseHeader>
    <CollapseBody  >
          {item.elements.map((el) => elementItem(el) )}
        
    </CollapseBody>
  </Collapse>
);

const elementItem = (item) => {
  return (
  <View style={globalStyles.cardContent}   key={item}>
  <Text style={{...globalStyles.titleSubSub, ...globalStyles.separatorBottom}} key={item}>{item}</Text>
  </View>
  )
};

const styles = StyleSheet.create({
  titleSub: {
    fontSize: 17,
        fontFamily: 'nunito-regular',

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
