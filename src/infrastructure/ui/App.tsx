import React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartupPage from "./pages/startup-page/startup-page";
import LoginPage from "~/infrastructure/ui/pages/login-page/login-page";

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="StartupPage" screenOptions={{headerShown : false}} >
        <Stack.Screen name="StartupPage" component={StartupPage}/>
          <Stack.Screen name="LoginPage" component={LoginPage}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

registerRootComponent(App);
