import React from "react";
import { registerRootComponent } from "expo";
import { View } from "react-native";
import StartupPage from "./pages/startup-page/startup-page";

function App() {
  return (
    <View>
        <StartupPage/>
    </View>
  );
}

registerRootComponent(App);
