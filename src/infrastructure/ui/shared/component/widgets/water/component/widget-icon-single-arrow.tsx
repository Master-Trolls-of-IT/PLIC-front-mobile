import React, { TouchableOpacity } from 'react-native';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import { WidgetIconSingleArrowProps } from '~/domain/interfaces/props/widgets/widget-icon-single-arrow-props';

const WidgetIconSingleArrow = ({ style, onPress }: WidgetIconSingleArrowProps) => {
    const assetSingleArrow = require('~/domain/entities/assets/icon/arrow/icon-single-arrow.svg');
    const newHeight = 25;
    const newWidth = 35;

    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <CustomSvg asset={assetSingleArrow} height={newHeight} width={newWidth} />
        </TouchableOpacity>
    );
};

export default WidgetIconSingleArrow;
