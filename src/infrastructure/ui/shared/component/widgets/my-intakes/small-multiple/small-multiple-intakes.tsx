import React from 'react';
import { Text, View } from 'react-native';
import { Bar } from 'react-native-progress';
import useSmallMultipleData from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-multiple/hooks';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import getUnitFromNutrient from '~/infrastructure/ui/shared/helper/get-unit-from-nutrient';
import customFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import SmallMultipleIntakesStyle from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-multiple/small-multiple-intakes-style.';
import { SmallMultipleIntakesProps } from '~/domain/interfaces/props/widgets/small-multiple-intakes-props';

const SmallMultipleIntakes = ({ firstNutrient, secondNutrient, thirdNutrient }: SmallMultipleIntakesProps) => {
    const { firstPercentage, secondPercentage, thirdPercentage } = useSmallMultipleData(
        firstNutrient,
        secondNutrient,
        thirdNutrient
    );

    return (
        <View style={SmallMultipleIntakesStyle.container}>
            <Text style={{ ...SmallMultipleIntakesStyle.title, ...CustomFontInterBold().text }}>Mes Apports</Text>
            <View style={SmallMultipleIntakesStyle.content}>
                <View style={SmallMultipleIntakesStyle.barContainer}>
                    <View style={SmallMultipleIntakesStyle.innerTitleContainer}>
                        <Text style={{ ...SmallMultipleIntakesStyle.firstInnerTitle, ...customFontInterBold().text }}>
                            {firstNutrient.nutrientType}
                        </Text>
                        <Text style={{ ...SmallMultipleIntakesStyle.firstInnerTitle, ...customFontInterBold().text }}>
                            {firstNutrient.earned} / {firstNutrient.goal}
                            {getUnitFromNutrient(firstNutrient.nutrientType)}
                        </Text>
                    </View>
                    <Bar
                        style={{ width: '100%' }}
                        {...SmallMultipleIntakesStyle.firstProgressBar}
                        animated={true}
                        progress={firstPercentage}
                        borderWidth={0}
                    />
                </View>
                <View style={SmallMultipleIntakesStyle.barContainer}>
                    <View style={SmallMultipleIntakesStyle.innerTitleContainer}>
                        <Text style={{ ...SmallMultipleIntakesStyle.secondInnerTitle, ...customFontInterBold().text }}>
                            {secondNutrient.nutrientType}
                        </Text>
                        <Text style={{ ...SmallMultipleIntakesStyle.secondInnerTitle, ...customFontInterBold().text }}>
                            {secondNutrient.earned} / {secondNutrient.goal}
                            {getUnitFromNutrient(secondNutrient.nutrientType)}
                        </Text>
                    </View>
                    <Bar
                        style={{ width: '100%' }}
                        {...SmallMultipleIntakesStyle.secondProgressBar}
                        animated={true}
                        progress={secondPercentage}
                        borderWidth={0}
                    />
                </View>
                <View style={SmallMultipleIntakesStyle.barContainer}>
                    <View style={SmallMultipleIntakesStyle.innerTitleContainer}>
                        <Text style={{ ...SmallMultipleIntakesStyle.thirdInnerTitle, ...customFontInterBold().text }}>
                            {thirdNutrient.nutrientType}
                        </Text>
                        <Text style={{ ...SmallMultipleIntakesStyle.thirdInnerTitle, ...customFontInterBold().text }}>
                            {thirdNutrient.earned} / {thirdNutrient.goal}
                            {getUnitFromNutrient(thirdNutrient.nutrientType)}
                        </Text>
                    </View>
                    <Bar
                        style={{ width: '100%' }}
                        {...SmallMultipleIntakesStyle.thirdProgressBar}
                        animated={true}
                        progress={thirdPercentage}
                        borderWidth={0}
                    />
                </View>
            </View>
        </View>
    );
};

export default SmallMultipleIntakes;
