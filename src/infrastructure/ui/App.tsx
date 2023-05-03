import React from 'react';
import { registerRootComponent } from 'expo';
import { View } from 'react-native';
import useAppData from '~/infrastructure/ui/hooks';
import SmallMultipleIntakes from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-multiple/small-multiple-intakes';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';
import LargeIntakes from '~/infrastructure/ui/shared/component/widgets/my-intakes/large/large-intakes';

function App() {
    const { rootStore, Stack, gestureEnabled, gestureDisabled } = useAppData();

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 250 }}>
            <LargeIntakes
                energy={{ nutrientType: NutrientsEnum.Energy, goal: 2300, earned: 1652 }}
                nutrient1={{ nutrientType: NutrientsEnum.Protein, goal: 79, earned: 62 }}
                nutrient2={{ nutrientType: NutrientsEnum.Carbohydrate, goal: 53, earned: 12 }}
                nutrient3={{ nutrientType: NutrientsEnum.Fiber, goal: 23, earned: 15 }}
            />
        </View>
        // <StoreProvider value={rootStore}>
        //     <AppContainer>
        //         <NavigationContainer>
        //             <Stack.Navigator
        //                 initialRouteName={PagesEnum.StartUpPage}
        //                 screenOptions={{
        //                     headerShown: false
        //                 }}>
        //                 {/* Authentification group */}
        //                 <Stack.Group>
        //                     <Stack.Screen
        //                         name={PagesEnum.StartUpPage}
        //                         component={StartUpPage}
        //                         options={gestureDisabled}
        //                     />
        //                     <Stack.Screen name={PagesEnum.LoginPage} component={LoginPage} options={gestureDisabled} />
        //                     <Stack.Screen name={PagesEnum.SignUpPage} component={SignUpPage} options={gestureEnabled} />
        //                 </Stack.Group>
        //
        //                 {/* App content Group */}
        //                 <Stack.Group screenOptions={{ animation: 'none' }}>
        //                     <Stack.Screen name={PagesEnum.MealPage} component={MealPage} options={gestureDisabled} />
        //                     <Stack.Screen name={PagesEnum.ScanPage} component={ScanPage} options={gestureDisabled} />
        //                     <Stack.Screen name={PagesEnum.HomePage} component={HomePage} options={gestureDisabled} />
        //                     <Stack.Screen
        //                         name={PagesEnum.RecipePage}
        //                         component={RecipePage}
        //                         options={gestureDisabled}
        //                     />
        //                     <Stack.Screen name={PagesEnum.GamePage} component={GamePage} options={gestureDisabled} />
        //                     <Stack.Screen
        //                         name={PagesEnum.HistoricalPage}
        //                         component={HistoricalPage}
        //                         options={gestureEnabled}
        //                     />
        //                 </Stack.Group>
        //             </Stack.Navigator>
        //         </NavigationContainer>
        //     </AppContainer>
        // </StoreProvider>
    );
}

registerRootComponent(App);
