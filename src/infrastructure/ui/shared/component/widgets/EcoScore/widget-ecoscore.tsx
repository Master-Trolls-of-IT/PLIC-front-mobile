import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import useEcoScoreData from './hooks';
import WidgetIconGaia from '../anecdote/widget-icon-gaia';

const EcoScore = ({ percentage }: { percentage: number }) => {
    const { color, pageStyle } = useEcoScoreData(percentage);

    return (
        <View style={pageStyle.content}>
            <Text style={{ ...pageStyle.title, ...CustomFontInterBold().text }}>Eco-score</Text>
            <Text style={{ ...pageStyle.percentage, ...CustomFontInterBold().text }}>{`${percentage}`}%</Text>
            <View
                style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    paddingTop: 0.22 * Dimensions.get('screen').width
                }}>
                <WidgetIconGaia />
            </View>

            <AnimatedCircularProgress
                style={pageStyle.circle}
                size={140}
                width={12}
                fill={percentage}
                tintColor={color}
                backgroundColor="#2E2E2E33"
                arcSweepAngle={360}
                rotation={0}
                lineCap={'round'}
            />
        </View>
    );
};

export default EcoScore;
