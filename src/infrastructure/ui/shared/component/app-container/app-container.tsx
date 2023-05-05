import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import useAppContainerData from '~/infrastructure/ui/shared/component/app-container/hooks';
import AppContainerStyle from '~/infrastructure/ui/shared/component/app-container/app-container-style';

const AppContainer = ({ children }: { children: JSX.Element }) => {
    const {
        animatedGameIconStyle,
        animatedMealIconStyle,
        animatedHomeIconStyle,
        animatedRecipeIconStyle,
        animatedScanIconStyle,
        animatedSlideBar,
        gamePageAsset,
        isFooterEnable,
        mealPageAsset,
        homePageAsset,
        recipePageAsset,
        scanPageAsset,
        newHeight,
        newWidth,
        onPressIcon
    } = useAppContainerData();
    return (
        <>
            {children}

            {isFooterEnable ? (
                <>
                    <View style={{ ...AppContainerStyle.slideBar, ...animatedSlideBar.slideBar }}></View>
                    <View style={AppContainerStyle.footerContainer}>
                        <View style={AppContainerStyle.footerBrownContainer}>
                            <View style={AppContainerStyle.iconContainer}>
                                <TouchableOpacity
                                    onPress={onPressIcon(PagesEnum.MealPage)}
                                    style={AppContainerStyle.iconButton}>
                                    <CustomSvg
                                        asset={mealPageAsset}
                                        style={{ ...AppContainerStyle.icon, ...animatedMealIconStyle.icon }}
                                        height={newHeight}
                                        width={newWidth}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={onPressIcon(PagesEnum.ScanPage)}
                                    style={AppContainerStyle.iconButton}>
                                    <CustomSvg
                                        asset={scanPageAsset}
                                        style={{ ...AppContainerStyle.icon, ...animatedScanIconStyle.icon }}
                                        height={newHeight}
                                        width={newWidth}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={onPressIcon(PagesEnum.HomePage)}
                                    style={AppContainerStyle.iconButton}>
                                    <CustomSvg
                                        asset={homePageAsset}
                                        style={{ ...AppContainerStyle.icon, ...animatedHomeIconStyle.icon }}
                                        height={newHeight}
                                        width={newWidth}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={onPressIcon(PagesEnum.RecipePage)}
                                    style={AppContainerStyle.iconButton}>
                                    <CustomSvg
                                        asset={recipePageAsset}
                                        style={{ ...AppContainerStyle.icon, ...animatedRecipeIconStyle.icon }}
                                        height={newHeight}
                                        width={newWidth}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={onPressIcon(PagesEnum.GamePage)}
                                    style={AppContainerStyle.iconButton}>
                                    <CustomSvg
                                        asset={gamePageAsset}
                                        style={{ ...AppContainerStyle.icon, ...animatedGameIconStyle.icon }}
                                        height={newHeight}
                                        width={newWidth}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </>
            ) : null}
        </>
    );
};

export default observer(AppContainer);
