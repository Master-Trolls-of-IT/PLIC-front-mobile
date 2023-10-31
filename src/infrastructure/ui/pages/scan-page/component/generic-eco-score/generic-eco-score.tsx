import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import React from 'react';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import GenericEcoScoreStyle from '~/infrastructure/ui/pages/scan-page/component/generic-eco-score/generic-eco-score-style';
import useGenericEcoScoreData from '~/infrastructure/ui/pages/scan-page/component/generic-eco-score/hooks';

const GenericEcoScore = ({ ecoScore, style }: { ecoScore: number; style?: object }) => {
    const { color } = useGenericEcoScoreData(ecoScore);

    return (
        <View style={{ ...GenericEcoScoreStyle.content, ...style }}>
            <Text style={{ ...GenericEcoScoreStyle.title, ...CustomFontInterBold().text }}>Eco-score</Text>
            <Text style={{ ...GenericEcoScoreStyle.ecoScore, ...CustomFontInterBold().text }}>{ecoScore}%</Text>

            <AnimatedCircularProgress
                style={GenericEcoScoreStyle.circle}
                size={120}
                width={10}
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

export default GenericEcoScore;
