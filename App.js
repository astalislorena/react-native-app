import React, { useState } from "react";
import SignUp from "./Screens/SignUp";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./Routes/HomeStack";

const getFonts = () =>
  Font.loadAsync({
    "epilogue-regular": require("./assets/fonts/Epilogue-Regular.ttf"),
    "epilogue-semibold": require("./assets/fonts/Epilogue-SemiBold.ttf"),
    "epilogue-bold": require("./assets/fonts/Epilogue-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log("error")}
      />
    );
  }
}
