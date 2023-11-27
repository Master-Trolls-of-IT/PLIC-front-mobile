import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import useAppData from '~/infrastructure/ui/hooks';
import AppContainer from '~/infrastructure/ui/shared/component/app-container/app-container';
import { StoreProvider } from '~/infrastructure/controllers/store';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import StartUpPage from '~/infrastructure/ui/pages/startup-page/startup-page';
import LoginPage from '~/infrastructure/ui/pages/login-page/login-page';
import SignUpPage from '~/infrastructure/ui/pages/sign-up-page/sign-up-page';
import MealPage from '~/infrastructure/ui/pages/meal-page/meal-page';
import ScanPage from '~/infrastructure/ui/pages/scan-page/scan-page';
import HomePage from '~/infrastructure/ui/pages/home-page/home-page';
import RecipePage from '~/infrastructure/ui/pages/recipes-page/recipe-page';
import GamePage from '~/infrastructure/ui/pages/game-page/game-page';
import HistoricalPage from '~/infrastructure/ui/pages/historical-page/historical-page';
import { navigationRef } from '~/infrastructure/ui/shared/helper/navigation-ref';
import ConsumedProductsPage from '~/infrastructure/ui/pages/consumed-products-page/consumed-products-page';
import SettingsPage from '~/infrastructure/ui/pages/settings-page/settings-page';
import PersonalDataPage from '~/infrastructure/ui/pages/personal-data-page/personal-data-page';
import WidgetPage from '~/infrastructure/ui/pages/widget-page/widget-page';
import CreateMealPage from '~/infrastructure/ui/pages/create-meal-page/create-meal-page';
import CreateMealScanPage from '~/infrastructure/ui/pages/create-meal-scan-page/create-meal-scan-page';
import MyRecipesPage from '~/infrastructure/ui/pages/my-recipes-page/my-recipes-page';

function App() {
    const { rootStore, Stack, gestureEnabled, gestureDisabled } = useAppData();

    return (
        <StoreProvider value={rootStore}>
            <AppContainer>
                <NavigationContainer ref={navigationRef}>
                    <Stack.Navigator
                        initialRouteName={PagesEnum.StartUpPage}
                        screenOptions={{
                            headerShown: false
                        }}>
                        {/* Authentification group */}
                        <Stack.Group>
                            <Stack.Screen
                                name={PagesEnum.StartUpPage}
                                component={StartUpPage}
                                options={gestureDisabled}
                            />
                            <Stack.Screen name={PagesEnum.LoginPage} component={LoginPage} options={gestureDisabled} />
                            <Stack.Screen name={PagesEnum.SignUpPage} component={SignUpPage} options={gestureEnabled} />
                        </Stack.Group>

                        {/* Settings group */}
                        <Stack.Group>
                            <Stack.Screen
                                name={PagesEnum.SettingsPage}
                                component={SettingsPage}
                                options={gestureEnabled}
                            />
                            <Stack.Screen
                                name={PagesEnum.PersonalDataPage}
                                component={PersonalDataPage}
                                options={gestureEnabled}
                            />
                            <Stack.Screen name={PagesEnum.WidgetPage} component={WidgetPage} options={gestureEnabled} />
                        </Stack.Group>

                        {/* App content Group */}
                        <Stack.Group>
                            <Stack.Screen name={PagesEnum.HomePage} component={HomePage} options={gestureDisabled} />
                            <Stack.Screen name={PagesEnum.ScanPage} component={ScanPage} options={gestureDisabled} />
                            <Stack.Screen
                                name={PagesEnum.HistoricalPage}
                                component={HistoricalPage}
                                options={gestureEnabled}
                            />
                            <Stack.Screen
                                name={PagesEnum.ConsumedProducts}
                                component={ConsumedProductsPage}
                                options={gestureEnabled}
                            />
                            <Stack.Screen
                                name={PagesEnum.RecipePage}
                                component={RecipePage}
                                options={gestureDisabled}
                            />
                            <Stack.Screen
                                name={PagesEnum.MyRecipesPage}
                                component={MyRecipesPage}
                                options={gestureDisabled}
                            />
                            <Stack.Screen name={PagesEnum.GamePage} component={GamePage} options={gestureDisabled} />
                        </Stack.Group>

                        {/* Meal group */}
                        <Stack.Group>
                            <Stack.Screen name={PagesEnum.MealPage} component={MealPage} options={gestureDisabled} />
                            <Stack.Screen
                                name={PagesEnum.CreateMealPage}
                                component={CreateMealPage}
                                options={gestureEnabled}
                            />
                            <Stack.Screen
                                name={PagesEnum.CreateMealScanPage}
                                component={CreateMealScanPage}
                                options={gestureEnabled}
                            />
                        </Stack.Group>
                    </Stack.Navigator>
                </NavigationContainer>
            </AppContainer>
        </StoreProvider>
    );
}

registerRootComponent(App);
