import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Card({ title, children }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View>{children}</View>
        <Text style={styles.title}> {title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  title: {
    fontFamily: "nunito-regular",
    fontSize: 18,
    color: "#333",
  },
});
