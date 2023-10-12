import React from 'react';
import { Text, View } from 'react-native';
import { Bar } from 'react-native-progress';
import useWidgetSmallMultipleData from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-multiple/hooks';
import { NutrientData } from '~/domain/interfaces/props/nutrient-data';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import getUnitFromNutrient from '~/infrastructure/ui/shared/helper/get-unit-from-nutrient';
import customFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import WidgetSmallMultipleIntakesStyle from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-multiple/widget-small-multiple-intakes-style.';

const WidgetSmallMultipleIntakes = ({
    firstNutrient,
    secondNutrient,
    thirdNutrient
}: {
    firstNutrient: NutrientData;
    secondNutrient: NutrientData;
    thirdNutrient: NutrientData;
}) => {
    const { firstPercentage, secondPercentage, thirdPercentage } = useWidgetSmallMultipleData(
        firstNutrient,
        secondNutrient,
        thirdNutrient
    );

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
                            {firstNutrient.nutrientType}
                        </Text>
                        <Text
                            style={{
                                ...WidgetSmallMultipleIntakesStyle.firstInnerTitle,
                                ...customFontInterBold().text
                            }}>
                            {firstNutrient.earned} / {firstNutrient.goal}
                            {getUnitFromNutrient(firstNutrient.nutrientType)}
                        </Text>
                    </View>
                    <Bar
                        style={{ width: '100%' }}
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
                            {secondNutrient.nutrientType}
                        </Text>
                        <Text
                            style={{
                                ...WidgetSmallMultipleIntakesStyle.secondInnerTitle,
                                ...customFontInterBold().text
                            }}>
                            {secondNutrient.earned} / {secondNutrient.goal}
                            {getUnitFromNutrient(secondNutrient.nutrientType)}
                        </Text>
                    </View>
                    <Bar
                        style={{ width: '100%' }}
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
                            {thirdNutrient.nutrientType}
                        </Text>
                        <Text
                            style={{
                                ...WidgetSmallMultipleIntakesStyle.thirdInnerTitle,
                                ...customFontInterBold().text
                            }}>
                            {thirdNutrient.earned} / {thirdNutrient.goal}
                            {getUnitFromNutrient(thirdNutrient.nutrientType)}
                        </Text>
                    </View>
                    <Bar
                        style={{ width: '100%' }}
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

export default WidgetSmallMultipleIntakes;
