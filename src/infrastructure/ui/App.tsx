import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartupPage from './pages/startup-page/startup-page';
import LoginPage from '~/infrastructure/ui/pages/login-page/login-page';
import SignUpPage from '~/infrastructure/ui/pages/sign-up-page/sign-up-page';
import HomePage from '~/infrastructure/ui/pages/home-page/home-page';
import useAppData from '~/infrastructure/ui/hooks';

function App() {
    const Stack = createNativeStackNavigator();
    useAppData();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomePage" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="StartupPage" component={StartupPage} />
                <Stack.Screen name="LoginPage" component={LoginPage} options={{ gestureEnabled: false }} />
                <Stack.Screen name="SignUpPage" component={SignUpPage} options={{ gestureEnabled: true }} />
                <Stack.Screen name="HomePage" component={HomePage} options={{ gestureEnabled: true }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

registerRootComponent(App);
