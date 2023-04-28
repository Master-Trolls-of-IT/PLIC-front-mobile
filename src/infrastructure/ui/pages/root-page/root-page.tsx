import React, { FunctionComponent } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react';
import { NavigationContainer } from '@react-navigation/native';
import RootPageStyle from '~/infrastructure/ui/pages/root-page/root-page-style';
import HistoricalPage from '~/infrastructure/ui/pages/historical-page/historical-page';
import ScanPage from '~/infrastructure/ui/pages/scan-page/scan-page';
import HomePage from '~/infrastructure/ui/pages/home-page/home-page';
import RecipePage from '~/infrastructure/ui/pages/recipes-page/recipe-page';
import GamePage from '~/infrastructure/ui/pages/game-page/game-page';
import useRootPageData from '~/infrastructure/ui/pages/root-page/hooks';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

const RootPage: FunctionComponent<any> = ({ oldNavigation }) => {
    const {
        animatedGameIconStyle,
        animatedHistoricalIconStyle,
        animatedHomeIconStyle,
        animatedRecipeIconStyle,
        animatedScanIconStyle,
        animatedSlideBar,
        footerRef,
        footerY,
        gamePageAsset,
        historicalPageAsset,
        homePageAsset,
        recipePageAsset,
        scanPageAsset,
        gestureEnbaled,
        gestureDisbaled,
        newHeight,
        newWidth,
        onPressIcon,
        Stack
    } = useRootPageData({ oldNavigation });

    return (
        <View style={RootPageStyle.background}>
            <View style={{ ...RootPageStyle.slideBar, ...animatedSlideBar.slideBar, top: footerY }}></View>
            <View ref={footerRef} style={RootPageStyle.footerContainer}>
                <View style={RootPageStyle.footerBrownContainer}>
                    <View style={RootPageStyle.iconContainer}>
                        <TouchableOpacity
                            onPress={onPressIcon(PagesEnum.HistoricalPage)}
                            style={RootPageStyle.iconButton}>
                            <CustomSvg
                                asset={historicalPageAsset}
                                style={{ ...RootPageStyle.icon, ...animatedHistoricalIconStyle.icon }}
                                height={newHeight}
                                width={newWidth}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onPressIcon(PagesEnum.ScanPage)} style={RootPageStyle.iconButton}>
                            <CustomSvg
                                asset={scanPageAsset}
                                style={{ ...RootPageStyle.icon, ...animatedScanIconStyle.icon }}
                                height={newHeight}
                                width={newWidth}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onPressIcon(PagesEnum.HomePage)} style={RootPageStyle.iconButton}>
                            <CustomSvg
                                asset={homePageAsset}
                                style={{ ...RootPageStyle.icon, ...animatedHomeIconStyle.icon }}
                                height={newHeight}
                                width={newWidth}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onPressIcon(PagesEnum.RecipePage)} style={RootPageStyle.iconButton}>
                            <CustomSvg
                                asset={recipePageAsset}
                                style={{ ...RootPageStyle.icon, ...animatedRecipeIconStyle.icon }}
                                height={newHeight}
                                width={newWidth}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onPressIcon(PagesEnum.GamePage)} style={RootPageStyle.iconButton}>
                            <CustomSvg
                                asset={gamePageAsset}
                                style={{ ...RootPageStyle.icon, ...animatedGameIconStyle.icon }}
                                height={newHeight}
                                width={newWidth}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={RootPageStyle.pageContainer}>
                <NavigationContainer independent>
                    <Stack.Navigator
                        initialRouteName={PagesEnum.HomePage}
                        screenOptions={{ headerShown: false, animation: 'none' }}>
                        <Stack.Screen
                            name={PagesEnum.HistoricalPage}
                            component={HistoricalPage}
                            options={gestureEnbaled}
                        />
                        <Stack.Screen name={PagesEnum.ScanPage} component={ScanPage} options={gestureEnbaled} />
                        <Stack.Screen name={PagesEnum.HomePage} component={HomePage} options={gestureEnbaled} />
                        <Stack.Screen name={PagesEnum.RecipePage} component={RecipePage} options={gestureEnbaled} />
                        <Stack.Screen name={PagesEnum.GamePage} component={GamePage} options={gestureEnbaled} />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </View>
    );
};

export default observer(RootPage);
