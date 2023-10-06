import React from 'react';
import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Bar } from 'react-native-progress';
import useLargeIntakesData from '~/infrastructure/ui/shared/component/widgets/my-intakes/large/hooks';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import customFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import getUnitFromNutrient from '~/infrastructure/ui/shared/helper/get-unit-from-nutrient';
import LargeIntakesStyle from '~/infrastructure/ui/shared/component/widgets/my-intakes/large/large-intakes-style.';
import { LargeIntakesProps } from '~/domain/interfaces/props/widgets/large-intakes-props';

const LargeIntakes = ({ energy, firstNutrient, secondNutrient, thirdNutrient }: LargeIntakesProps) => {
    const { energyColor, energyPercentage, firstPercentage, secondPercentage, thirdPercentage } = useLargeIntakesData(
        energy,
        firstNutrient,
        secondNutrient,
        thirdNutrient
    );

    return (
        <View style={LargeIntakesStyle.container}>
            <View style={LargeIntakesStyle.content}>
                <View style={LargeIntakesStyle.leftSide}>
                    <Text style={{ ...LargeIntakesStyle.title, ...CustomFontInterBold().text }}>Mes Apports</Text>
                    <View style={LargeIntakesStyle.circularView}>
                        <AnimatedCircularProgress
                            style={LargeIntakesStyle.circle}
                            size={120}
                            width={12}
                            fill={energyPercentage}
                            tintColor={energyColor}
                            backgroundColor={ColorEnum.ExtraOpaqueGrey}
                            arcSweepAngle={230}
                            rotation={245}
                            lineCap={'round'}
                        />
                        <Text style={{ ...LargeIntakesStyle.leftInnerTitle, ...CustomFontInterBold().text }}>
                            {energy.nutrientType}
                        </Text>
                        <Text style={{ ...LargeIntakesStyle.leftEarned, ...CustomFontInterBold().text }}>
                            {energy.earned}
                        </Text>
                        <Text style={{ ...LargeIntakesStyle.leftGoal, ...CustomFontInterBold().text }}>
                            {'/' + energy.goal}
                        </Text>
                    </View>
                </View>

                <View style={LargeIntakesStyle.rightSide}>
                    <View style={LargeIntakesStyle.barContainer}>
                        <View style={LargeIntakesStyle.innerTitleContainer}>
                            <Text style={{ ...LargeIntakesStyle.firstInnerTitle, ...customFontInterBold().text }}>
                                {firstNutrient.nutrientType}
                            </Text>
                            <Text style={{ ...LargeIntakesStyle.firstInnerTitle, ...customFontInterBold().text }}>
                                {firstNutrient.earned} / {firstNutrient.goal}
                                {getUnitFromNutrient(firstNutrient.nutrientType)}
                            </Text>
                        </View>
                        <Bar
                            {...LargeIntakesStyle.firstProgressBar}
                            animated={true}
                            progress={firstPercentage}
                            borderWidth={0}
                        />
                    </View>
                    <View style={LargeIntakesStyle.barContainer}>
                        <View style={LargeIntakesStyle.innerTitleContainer}>
                            <Text style={{ ...LargeIntakesStyle.secondInnerTitle, ...customFontInterBold().text }}>
                                {secondNutrient.nutrientType}
                            </Text>
                            <Text style={{ ...LargeIntakesStyle.secondInnerTitle, ...customFontInterBold().text }}>
                                {secondNutrient.earned} / {secondNutrient.goal}
                                {getUnitFromNutrient(secondNutrient.nutrientType)}
                            </Text>
                        </View>
                        <Bar
                            {...LargeIntakesStyle.secondProgressBar}
                            animated={true}
                            progress={secondPercentage}
                            borderWidth={0}
                        />
                    </View>
                    <View style={LargeIntakesStyle.barContainer}>
                        <View style={LargeIntakesStyle.innerTitleContainer}>
                            <Text style={{ ...LargeIntakesStyle.thirdInnerTitle, ...customFontInterBold().text }}>
                                {thirdNutrient.nutrientType}
                            </Text>
                            <Text style={{ ...LargeIntakesStyle.thirdInnerTitle, ...customFontInterBold().text }}>
                                {thirdNutrient.earned} / {thirdNutrient.goal}
                                {getUnitFromNutrient(thirdNutrient.nutrientType)}
                            </Text>
                        </View>
                        <Bar
                            {...LargeIntakesStyle.thirdProgressBar}
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

export default LargeIntakes;
