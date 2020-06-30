import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: Constants.statusBarHeight / 2,
    paddingRight: Constants.statusBarHeight / 2,
    paddingTop: Constants.statusBarHeight / 2,
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333",
  },
  centerTitleText: {
    textAlign: "center",
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  button: {
    marginBottom: 20,
    borderRadius: 25,
  },
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
  },
  separatorBottom: {
    borderBottomColor: "black",
    borderBottomWidth: 0.2,
  },
  titleSubSub: {
    fontSize: 17,
    marginBottom: 4,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    fontFamily: "nunito-regular",
  },
});
