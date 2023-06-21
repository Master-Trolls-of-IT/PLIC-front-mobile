import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import React from 'react';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import useEcoScoreData from '~/infrastructure/ui/shared/component/widgets/eco-score/hooks';
import ScanPageScannedItemStyle from '~/infrastructure/ui/pages/scan-page/component/scanned-item/scan-page-scanned-item-style';

const GenericEcoScore = ({ ecoScore, style }: { ecoScore: number; style?: object }) => {
    const { color } = useEcoScoreData(ecoScore);

    return (
        <View style={{ ...ScanPageScannedItemStyle.content, ...style }}>
            <Text style={{ ...ScanPageScannedItemStyle.title, ...CustomFontInterBold().text }}>Eco-score</Text>
            <Text style={{ ...ScanPageScannedItemStyle.ecoScore, ...CustomFontInterBold().text }}>{ecoScore}%</Text>

            <AnimatedCircularProgress
                style={ScanPageScannedItemStyle.circle}
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
