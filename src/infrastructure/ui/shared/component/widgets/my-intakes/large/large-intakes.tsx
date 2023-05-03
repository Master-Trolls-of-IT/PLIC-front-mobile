import React from 'react';
import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Bar } from 'react-native-progress';
import useLargeIntakesData from '~/infrastructure/ui/shared/component/widgets/my-intakes/large/hooks';
import { NutrientData } from '~/domain/interfaces/props/nutrient-data';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import customFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import getUnitFromNutrient from '~/infrastructure/ui/shared/helper/get-unit-from-nutrient';

const LargeIntakes = ({
    energy,
    nutrient1,
    nutrient2,
    nutrient3
}: {
    energy: NutrientData;
    nutrient1: NutrientData;
    nutrient2: NutrientData;
    nutrient3: NutrientData;
}) => {
    const { pageStyle } = useLargeIntakesData(nutrient1, nutrient2, nutrient3);

    return (
        <View style={pageStyle.container}>
            <View style={pageStyle.content}>
                <View style={pageStyle.leftSide}>
                    <Text style={{ ...pageStyle.title, ...CustomFontInterBold().text }}>Mes Apports</Text>
                    <View style={pageStyle.circularView}>
                        <AnimatedCircularProgress
                            style={pageStyle.circle}
                            size={120}
                            width={12}
                            fill={(energy.earned * 100) / energy.goal}
                            tintColor={ColorEnum.ClassicGreen}
                            backgroundColor="#2E2E2E33"
                            arcSweepAngle={230}
                            rotation={245}
                            lineCap={'round'}
                        />
                        <Text style={{ ...pageStyle.leftInnerTitle, ...CustomFontInterBold().text }}>
                            {energy.nutrientType}
                        </Text>
                        <Text style={{ ...pageStyle.leftEarned, ...CustomFontInterBold().text }}>{energy.earned}</Text>
                        <Text style={{ ...pageStyle.leftGoal, ...CustomFontInterBold().text }}>
                            {'/' + energy.goal}
                        </Text>
                    </View>
                </View>

                <View style={pageStyle.rightSide}>
                    <View style={pageStyle.barContainer}>
                        <View style={pageStyle.innerTitleContainer}>
                            <Text style={{ ...pageStyle.innerTitle1, ...customFontInterBold() }}>
                                {nutrient1.nutrientType}
                            </Text>
                            <Text style={{ ...pageStyle.innerTitle1, ...customFontInterBold() }}>
                                {nutrient1.earned} / {nutrient1.goal}
                                {getUnitFromNutrient(nutrient1.nutrientType)}
                            </Text>
                        </View>
                        <Bar
                            style={{ width: '100%' }}
                            {...pageStyle.progressBar1}
                            animated={true}
                            progress={nutrient1.earned / nutrient1.goal}
                            borderWidth={0}
                        />
                    </View>
                    <View style={pageStyle.barContainer}>
                        <View style={pageStyle.innerTitleContainer}>
                            <Text style={{ ...pageStyle.innerTitle2, ...customFontInterBold() }}>
                                {nutrient2.nutrientType}
                            </Text>
                            <Text style={{ ...pageStyle.innerTitle2, ...customFontInterBold() }}>
                                {nutrient2.earned} / {nutrient2.goal}
                                {getUnitFromNutrient(nutrient2.nutrientType)}
                            </Text>
                        </View>
                        <Bar
                            style={{ width: '100%' }}
                            {...pageStyle.progressBar2}
                            animated={true}
                            progress={nutrient2.earned / nutrient2.goal}
                            borderWidth={0}
                        />
                    </View>
                    <View style={pageStyle.barContainer}>
                        <View style={pageStyle.innerTitleContainer}>
                            <Text style={{ ...pageStyle.innerTitle3, ...customFontInterBold() }}>
                                {nutrient3.nutrientType}
                            </Text>
                            <Text style={{ ...pageStyle.innerTitle3, ...customFontInterBold() }}>
                                {nutrient3.earned} / {nutrient3.goal}
                                {getUnitFromNutrient(nutrient3.nutrientType)}
                            </Text>
                        </View>
                        <Bar
                            style={{ width: '100%' }}
                            {...pageStyle.progressBar3}
                            animated={true}
                            progress={nutrient3.earned / nutrient3.goal}
                            borderWidth={0}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default LargeIntakes;
