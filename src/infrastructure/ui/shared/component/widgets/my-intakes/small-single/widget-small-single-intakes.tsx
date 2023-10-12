import React from 'react';
import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import useWidgetSmallSingleIntakesData from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-single/hooks';
import WidgetSmallSingleIntakesStyle from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-single/widget-small-single-intakes-style';

const WidgetSmallSingleIntakes = ({
    nutrientType,
    earned,
    goal
}: {
    nutrientType: NutrientsEnum;
    earned: number;
    goal: number;
}) => {
    const { unit, color, nutrientName } = useWidgetSmallSingleIntakesData(nutrientType);

    return (
        <View style={WidgetSmallSingleIntakesStyle.content}>
            <Text style={{ ...WidgetSmallSingleIntakesStyle.title, ...CustomFontInterBold().text }}>Mes Apports</Text>
            <View style={WidgetSmallSingleIntakesStyle.circularView}>
                <AnimatedCircularProgress
                    style={WidgetSmallSingleIntakesStyle.circle}
                    size={130}
                    width={12}
                    fill={(earned * 100) / (goal === 0 ? 1 : goal)}
                    tintColor={color}
                    backgroundColor={ColorEnum.ExtraOpaqueGrey}
                    arcSweepAngle={230}
                    rotation={245}
                    lineCap={'round'}
                />
                <View style={WidgetSmallSingleIntakesStyle.textContainer}>
                    <Text style={{ ...WidgetSmallSingleIntakesStyle.innerTitle, ...CustomFontInterBold().text }}>
                        {nutrientName}
                    </Text>
                    <Text style={{ ...WidgetSmallSingleIntakesStyle.earned, ...CustomFontInterBold().text }}>
                        {earned}
                    </Text>
                    <Text style={{ ...WidgetSmallSingleIntakesStyle.goal, ...CustomFontInterBold().text }}>
                        {'/' + goal + unit}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default WidgetSmallSingleIntakes;
