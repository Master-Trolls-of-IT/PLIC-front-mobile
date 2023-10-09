import { Text, View } from 'react-native';
import React from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import WidgetAnecdoteStyle from '~/infrastructure/ui/shared/component/widgets/anecdote/widget-anecdote-style';
import LargeIntakesStyle from '~/infrastructure/ui/shared/component/widgets/my-intakes/large/large-intakes-style.';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import { NutrientData } from '~/domain/interfaces/props/nutrient-data';
import useWidgetCalorieData from '~/infrastructure/ui/shared/component/widgets/calorie/hooks';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';

const WidgetCalorie = ({ energy }: { energy: NutrientData }) => {
    const { energyColor, energyPercentage } = useWidgetCalorieData(energy);
    return (
        <View style={WidgetAnecdoteStyle.anecdoteContainer}>
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
                <Text style={{ ...LargeIntakesStyle.leftEarned, ...CustomFontInterBold().text }}>{energy.earned}</Text>
                <Text style={{ ...LargeIntakesStyle.leftGoal, ...CustomFontInterBold().text }}>
                    {'/' + energy.goal}
                </Text>
            </View>
        </View>
    );
};

export default WidgetCalorie;
