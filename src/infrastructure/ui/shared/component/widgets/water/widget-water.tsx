import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import WidgetWaterStyle from '~/infrastructure/ui/shared/component/widgets/water/widget-water-style';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import useWidgetWaterData from '~/infrastructure/ui/shared/component/widgets/water/hooks';
import WidgetIconSingleArrow from '~/infrastructure/ui/shared/component/widgets/water/component/widget-icon-single-arrow';

const WidgetWater = () => {
    const {
        assetWaterGlass,
        newWaterGlassHeight,
        newWaterGlassWidth,
        goal,
        quantity,
        onPressUpArrow,
        onPressDownArrow,
        round
    } = useWidgetWaterData();

    return (
        <View style={WidgetWaterStyle.container}>
            <View style={WidgetWaterStyle.circleContainer}>
                <AnimatedCircularProgress
                    style={WidgetWaterStyle.circle}
                    size={95}
                    width={8}
                    fill={(quantity / goal) * 100}
                    tintColor={ColorEnum.WidgetWaterBLue}
                    backgroundColor={ColorEnum.ExtraOpaqueGrey}
                    arcSweepAngle={360}
                    rotation={0}
                    lineCap={'round'}
                />

                <View style={WidgetWaterStyle.textContainer}>
                    <Text style={{ ...WidgetWaterStyle.quantityText, ...CustomFontInterBold().text }}>
                        {round(quantity)} L
                    </Text>
                    <Text style={{ ...WidgetWaterStyle.goalText, ...CustomFontInterBold().text }}>
                        /{round(goal)} L
                    </Text>
                </View>
            </View>

            <View style={WidgetWaterStyle.waterGlassContainer}>
                <WidgetIconSingleArrow style={WidgetWaterStyle.upArrowContainer} onPress={onPressUpArrow} />
                <CustomSvg asset={assetWaterGlass} height={newWaterGlassHeight} width={newWaterGlassWidth} />
                <WidgetIconSingleArrow style={WidgetWaterStyle.downArrowContainer} onPress={onPressDownArrow} />
            </View>
        </View>
    );
};

export default observer(WidgetWater);
