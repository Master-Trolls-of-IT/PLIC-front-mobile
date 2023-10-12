import React from 'react';
import { Text, View } from 'react-native';
import { Bar } from 'react-native-progress';
import { observer } from 'mobx-react';
import useWidgetSmallMultipleData from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-multiple/hooks';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import getUnitFromNutrient from '~/infrastructure/ui/shared/helper/get-unit-from-nutrient';
import customFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import WidgetSmallMultipleIntakesStyle from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-multiple/widget-small-multiple-intakes-style.';
import { WidgetSmallMultipleIntakesProps } from '~/domain/interfaces/props/widgets/small-multiple-intakes-props';

const WidgetSmallMultipleIntakes = ({
    nutrients: [firstNutrient, secondNutrient, thirdNutrient]
}: WidgetSmallMultipleIntakesProps) => {
    const {
        firstPercentage,
        secondPercentage,
        thirdPercentage,
        firstNutrientObject,
        secondNutrientObject,
        thirdNutrientObject
    } = useWidgetSmallMultipleData(firstNutrient, secondNutrient, thirdNutrient);

    return (
        <View style={WidgetSmallMultipleIntakesStyle.container}>
            <Text style={{ ...WidgetSmallMultipleIntakesStyle.title, ...CustomFontInterBold().text }}>Mes Apports</Text>
            <View style={WidgetSmallMultipleIntakesStyle.content}>
                <View style={WidgetSmallMultipleIntakesStyle.barContainer}>
                    <View style={WidgetSmallMultipleIntakesStyle.innerTitleContainer}>
                        <Text
                            style={{
                                ...WidgetSmallMultipleIntakesStyle.firstInnerTitle,
                                ...customFontInterBold().text
                            }}>
                            {firstNutrientObject.nutrientType}
                        </Text>
                        <Text
                            style={{
                                ...WidgetSmallMultipleIntakesStyle.firstInnerTitle,
                                ...customFontInterBold().text
                            }}>
                            {firstNutrientObject.earned} / {firstNutrientObject.goal}
                            {getUnitFromNutrient(firstNutrientObject.nutrientType)}
                        </Text>
                    </View>
                    <Bar
                        style={WidgetSmallMultipleIntakesStyle.bar}
                        {...WidgetSmallMultipleIntakesStyle.firstProgressBar}
                        animated={true}
                        progress={firstPercentage}
                        borderWidth={0}
                    />
                </View>
                <View style={WidgetSmallMultipleIntakesStyle.barContainer}>
                    <View style={WidgetSmallMultipleIntakesStyle.innerTitleContainer}>
                        <Text
                            style={{
                                ...WidgetSmallMultipleIntakesStyle.secondInnerTitle,
                                ...customFontInterBold().text
                            }}>
                            {secondNutrientObject.nutrientType}
                        </Text>
                        <Text
                            style={{
                                ...WidgetSmallMultipleIntakesStyle.secondInnerTitle,
                                ...customFontInterBold().text
                            }}>
                            {secondNutrientObject.earned} / {secondNutrientObject.goal}
                            {getUnitFromNutrient(secondNutrientObject.nutrientType)}
                        </Text>
                    </View>
                    <Bar
                        style={WidgetSmallMultipleIntakesStyle.bar}
                        {...WidgetSmallMultipleIntakesStyle.secondProgressBar}
                        animated={true}
                        progress={secondPercentage}
                        borderWidth={0}
                    />
                </View>
                <View style={WidgetSmallMultipleIntakesStyle.barContainer}>
                    <View style={WidgetSmallMultipleIntakesStyle.innerTitleContainer}>
                        <Text
                            style={{
                                ...WidgetSmallMultipleIntakesStyle.thirdInnerTitle,
                                ...customFontInterBold().text
                            }}>
                            {thirdNutrientObject.nutrientType}
                        </Text>
                        <Text
                            style={{
                                ...WidgetSmallMultipleIntakesStyle.thirdInnerTitle,
                                ...customFontInterBold().text
                            }}>
                            {thirdNutrientObject.earned} / {thirdNutrientObject.goal}
                            {getUnitFromNutrient(thirdNutrientObject.nutrientType)}
                        </Text>
                    </View>
                    <Bar
                        style={WidgetSmallMultipleIntakesStyle.bar}
                        {...WidgetSmallMultipleIntakesStyle.thirdProgressBar}
                        animated={true}
                        progress={thirdPercentage}
                        borderWidth={0}
                    />
                </View>
            </View>
        </View>
    );
};

export default observer(WidgetSmallMultipleIntakes);
