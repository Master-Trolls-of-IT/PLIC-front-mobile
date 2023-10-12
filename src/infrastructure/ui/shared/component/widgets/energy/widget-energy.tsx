import { Text, View } from 'react-native';
import React from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { observer } from 'mobx-react';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';
import WidgetEnergyStyle from '~/infrastructure/ui/shared/component/widgets/energy/widget-energy-style';
import useWidgetEnergyData from '~/infrastructure/ui/shared/component/widgets/energy/hooks';

const WidgetEnergy = () => {
    const { energyColor, energyPercentage, earned, goal } = useWidgetEnergyData();

    return (
        <View style={WidgetEnergyStyle.widgetContainer}>
            <View style={WidgetEnergyStyle.circularView}>
                <AnimatedCircularProgress
                    style={WidgetEnergyStyle.circle}
                    size={120}
                    width={12}
                    fill={energyPercentage}
                    tintColor={energyColor}
                    backgroundColor={ColorEnum.ExtraOpaqueGrey}
                    arcSweepAngle={230}
                    rotation={245}
                    lineCap={'round'}
                />
                <Text style={{ ...WidgetEnergyStyle.innerTitle, ...CustomFontInterBold().text }}>
                    {NutrientsEnum.Energy}
                </Text>
                <Text style={{ ...WidgetEnergyStyle.earned, ...CustomFontInterBold().text }}>{earned}</Text>
                <Text style={{ ...WidgetEnergyStyle.goal, ...CustomFontInterBold().text }}>{'/' + goal}</Text>
            </View>
        </View>
    );
};

export default observer(WidgetEnergy);
