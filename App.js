import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import HomeNavigator from "./routes/homeStack";
import drawerNavigator from './routes/drawer';
const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setfontsLoaded] = useState(false);

  if (fontsLoaded) {
    // return HomeNavigator();
    return drawerNavigator();
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setfontsLoaded(true)} />
    );
  }
}
