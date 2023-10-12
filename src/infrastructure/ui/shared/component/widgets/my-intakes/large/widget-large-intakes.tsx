import React from 'react';
import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Bar } from 'react-native-progress';
import { observer } from 'mobx-react';
import useWidgetLargeIntakesData from '~/infrastructure/ui/shared/component/widgets/my-intakes/large/hooks';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import customFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import getUnitFromNutrient from '~/infrastructure/ui/shared/helper/get-unit-from-nutrient';
import WidgetLargeIntakesStyle from '~/infrastructure/ui/shared/component/widgets/my-intakes/large/widget-large-intakes-style.';
import { LargeIntakesProps } from '~/domain/interfaces/props/widgets/large-intakes-props';

const WidgetLargeIntakes = ({ nutrients: [firstNutrient, secondNutrient, thirdNutrient] }: LargeIntakesProps) => {
    const {
        energyColor,
        energyPercentage,
        firstPercentage,
        secondPercentage,
        thirdPercentage,
        energy,
        firstNutrientObject,
        secondNutrientObject,
        thirdNutrientObject
    } = useWidgetLargeIntakesData(firstNutrient, secondNutrient, thirdNutrient);

    return (
        <View style={WidgetLargeIntakesStyle.container}>
            <View style={WidgetLargeIntakesStyle.content}>
                <View style={WidgetLargeIntakesStyle.leftSide}>
                    <Text style={{ ...WidgetLargeIntakesStyle.title, ...CustomFontInterBold().text }}>Mes Apports</Text>
                    <View style={WidgetLargeIntakesStyle.circularView}>
                        <AnimatedCircularProgress
                            style={WidgetLargeIntakesStyle.circle}
                            size={120}
                            width={12}
                            fill={energyPercentage}
                            tintColor={energyColor}
                            backgroundColor={ColorEnum.ExtraOpaqueGrey}
                            arcSweepAngle={230}
                            rotation={245}
                            lineCap={'round'}
                        />
                        <Text style={{ ...WidgetLargeIntakesStyle.leftInnerTitle, ...CustomFontInterBold().text }}>
                            {energy.nutrientType}
                        </Text>
                        <Text style={{ ...WidgetLargeIntakesStyle.leftEarned, ...CustomFontInterBold().text }}>
                            {energy.earned}
                        </Text>
                        <Text style={{ ...WidgetLargeIntakesStyle.leftGoal, ...CustomFontInterBold().text }}>
                            {'/' + energy.goal}
                        </Text>
                    </View>
                </View>

                <View style={WidgetLargeIntakesStyle.rightSide}>
                    <View style={WidgetLargeIntakesStyle.barContainer}>
                        <View style={WidgetLargeIntakesStyle.innerTitleContainer}>
                            <Text style={{ ...WidgetLargeIntakesStyle.firstInnerTitle, ...customFontInterBold().text }}>
                                {firstNutrientObject.nutrientType}
                            </Text>
                            <Text style={{ ...WidgetLargeIntakesStyle.firstInnerTitle, ...customFontInterBold().text }}>
                                {firstNutrientObject.earned} / {firstNutrientObject.goal}
                                {getUnitFromNutrient(firstNutrientObject.nutrientType)}
                            </Text>
                        </View>
                        <Bar
                            {...WidgetLargeIntakesStyle.firstProgressBar}
                            animated={true}
                            progress={firstPercentage}
                            borderWidth={0}
                        />
                    </View>

                    <View style={WidgetLargeIntakesStyle.barContainer}>
                        <View style={WidgetLargeIntakesStyle.innerTitleContainer}>
                            <Text
                                style={{ ...WidgetLargeIntakesStyle.secondInnerTitle, ...customFontInterBold().text }}>
                                {secondNutrientObject.nutrientType}
                            </Text>
                            <Text
                                style={{ ...WidgetLargeIntakesStyle.secondInnerTitle, ...customFontInterBold().text }}>
                                {secondNutrientObject.earned} / {secondNutrientObject.goal}
                                {getUnitFromNutrient(secondNutrientObject.nutrientType)}
                            </Text>
                        </View>
                        <Bar
                            {...WidgetLargeIntakesStyle.secondProgressBar}
                            animated={true}
                            progress={secondPercentage}
                            borderWidth={0}
                        />
                    </View>

                    <View style={WidgetLargeIntakesStyle.barContainer}>
                        <View style={WidgetLargeIntakesStyle.innerTitleContainer}>
                            <Text style={{ ...WidgetLargeIntakesStyle.thirdInnerTitle, ...customFontInterBold().text }}>
                                {thirdNutrientObject.nutrientType}
                            </Text>
                            <Text style={{ ...WidgetLargeIntakesStyle.thirdInnerTitle, ...customFontInterBold().text }}>
                                {thirdNutrientObject.earned} / {thirdNutrientObject.goal}
                                {getUnitFromNutrient(thirdNutrientObject.nutrientType)}
                            </Text>
                        </View>
                        <Bar
                            {...WidgetLargeIntakesStyle.thirdProgressBar}
                            animated={true}
                            progress={thirdPercentage}
                            borderWidth={0}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default observer(WidgetLargeIntakes);
