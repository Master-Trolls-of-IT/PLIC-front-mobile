import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MealPageStyle from '~/infrastructure/ui/pages/meal-page/meal-page-style';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import SearchList from '~/infrastructure/ui/shared/component/item/search-list/search-list';
import { ItemEnum } from '~/domain/interfaces/enum/item-enum';
import HistoricalPageBlobsTop from '~/infrastructure/ui/pages/historical-page/component/background/historical-page-blobs-top';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import useMealPageData from '~/infrastructure/ui/pages/meal-page/hooks';
import MealPageActiveItem from '~/infrastructure/ui/pages/meal-page/component/active-meal/meal-page-active-item';

const MealPage = () => {
    const { mealList, mockData, addMealButton, newWidth, newHeight, isMealActive, onAddPress, onPressMealMenu } =
        useMealPageData();

    return (
        <KeyboardAwareScrollView nestedScrollEnabled bounces={false}>
            <View style={MealPageStyle.container}>
                <View style={MealPageStyle.background}>
                    <HistoricalPageBlobsTop />
                </View>
                <GenericHeaderText
                    firstText={'Vos Repas'}
                    secondText={'Créer un repas ou visualisez un repas enregistré·'}
                    containerStyle={MealPageStyle.headerContainer}
                />
                <SearchList itemType={ItemEnum.Meal} data={mockData} />
                <View style={MealPageStyle.addButton}>
                    <TouchableOpacity onPress={onAddPress}>
                        <CustomSvg
                            asset={addMealButton}
                            style={MealPageStyle.plusImage}
                            height={newHeight}
                            width={newWidth}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {isMealActive && <MealPageActiveItem onPressMealMenu={onPressMealMenu} />}
        </KeyboardAwareScrollView>
    );
};

export default observer(MealPage);
