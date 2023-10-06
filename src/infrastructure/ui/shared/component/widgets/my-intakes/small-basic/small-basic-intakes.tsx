import React from 'react';
import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';
import useSmallBasicIntakesData from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-basic/hooks';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import { SmallBasicIntakesProps } from '~/domain/interfaces/props/widgets/small-basic-intakes-props';

const SmallBasicIntakes = ({ nutrientType, earned, goal }: SmallBasicIntakesProps) => {
    const { unit, color, pageStyle } = useSmallBasicIntakesData(nutrientType);

    return (
        <View style={pageStyle.content}>
            <Text style={{ ...pageStyle.title, ...CustomFontInterBold().text }}>Mes Apports</Text>
            <View style={pageStyle.circularView}>
                <AnimatedCircularProgress
                    style={pageStyle.circle}
                    size={120}
                    width={12}
                    fill={(earned * 100) / (goal === 0 ? 1 : goal)}
                    tintColor={color}
                    backgroundColor={ColorEnum.ExtraOpaqueGrey}
                    arcSweepAngle={230}
                    rotation={245}
                    lineCap={'round'}
                />
                <Text style={{ ...pageStyle.innerTitle, ...CustomFontInterBold().text }}>{nutrientType}</Text>
                <Text style={{ ...pageStyle.earned, ...CustomFontInterBold().text }}>{earned}</Text>
                <Text style={{ ...pageStyle.goal, ...CustomFontInterBold().text }}>{'/' + goal + unit}</Text>
            </View>
        </View>
    );
};

export default SmallBasicIntakes;
