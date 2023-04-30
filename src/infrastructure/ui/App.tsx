import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import StartUpPage from './pages/startup-page/startup-page';
import LoginPage from '~/infrastructure/ui/pages/login-page/login-page';
import SignUpPage from '~/infrastructure/ui/pages/sign-up-page/sign-up-page';
import RootPage from '~/infrastructure/ui/pages/root-page/root-page';
import useAppData from '~/infrastructure/ui/hooks';
import { StoreProvider } from '~/infrastructure/controllers/store';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

function App() {
    const { rootStore, Stack } = useAppData();

    return (
        <StoreProvider value={rootStore}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={PagesEnum.StartUpPage}
                    screenOptions={{ headerShown: false, animation: 'none' }}>
                    <Stack.Screen name={PagesEnum.StartUpPage} component={StartUpPage} />
                    <Stack.Screen
                        name={PagesEnum.LoginPage}
                        component={LoginPage}
                        options={{ gestureEnabled: false }}
                    />
                    <Stack.Screen
                        name={PagesEnum.SignUpPage}
                        component={SignUpPage}
                        options={{ gestureEnabled: true }}
                    />
                    <Stack.Screen name={PagesEnum.RootPage} component={RootPage} options={{ gestureEnabled: true }} />
                </Stack.Navigator>
            </NavigationContainer>
        </StoreProvider>
    );
}

registerRootComponent(App);
