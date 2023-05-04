import React from 'react';
import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import useEcoScoreData from '~/infrastructure/ui/shared/component/widgets/ecoscore/hooks';
import WidgetIconGaia from '~/infrastructure/ui/shared/component/widgets/anecdote/widget-icon-gaia';
import EcoScoreStyle from '~/infrastructure/ui/shared/component/widgets/ecoscore/widget-ecoscore-style';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const EcoScore = ({ ecoScore, style }: { ecoScore: number; style?: object }) => {
    const { color } = useEcoScoreData(ecoScore);
    return (
        <View style={{ ...EcoScoreStyle.content, ...style }}>
            <Text style={{ ...EcoScoreStyle.title, ...CustomFontInterBold().text }}>Eco-score</Text>
            <Text style={{ ...EcoScoreStyle.ecoScore, ...CustomFontInterBold().text }}>{ecoScore}%</Text>
            <View style={EcoScoreStyle.icon}>
                <WidgetIconGaia />
            </View>

            <AnimatedCircularProgress
                style={EcoScoreStyle.circle}
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

export default EcoScore;
