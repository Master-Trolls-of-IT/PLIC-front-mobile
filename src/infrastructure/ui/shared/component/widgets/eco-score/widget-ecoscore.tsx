import React from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import useWidgetEcoScoreData from '~/infrastructure/ui/shared/component/widgets/eco-score/hooks';
import WidgetIconGaia from '~/infrastructure/ui/shared/component/widgets/anecdote/component/widget-icon-gaia';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import WidgetEcoScoreStyle from '~/infrastructure/ui/shared/component/widgets/eco-score/widget-ecoscore-style';
import { WidgetEcoscoreProps } from '~/domain/interfaces/props/widgets/widget-ecoscore-props';

const WidgetEcoScore = ({ style }: WidgetEcoscoreProps) => {
    const { color, ecoScore } = useWidgetEcoScoreData();

    return (
        <View style={{ ...WidgetEcoScoreStyle.content, ...style }}>
            <Text style={{ ...WidgetEcoScoreStyle.title, ...CustomFontInterBold().text }}>Eco-score</Text>
            <Text style={{ ...WidgetEcoScoreStyle.ecoScore, ...CustomFontInterBold().text }}>{ecoScore}%</Text>
            <View style={WidgetEcoScoreStyle.icon}>
                <WidgetIconGaia />
            </View>

            <AnimatedCircularProgress
                style={WidgetEcoScoreStyle.circle}
                size={140}
                width={12}
                fill={ecoScore}
                tintColor={color}
                backgroundColor={ColorEnum.ExtraOpaqueGrey}
                arcSweepAngle={360}
                rotation={0}
                lineCap={'round'}
            />
        </View>
    );
};

export default observer(WidgetEcoScore);
