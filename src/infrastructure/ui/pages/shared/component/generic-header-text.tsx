import React from 'react';
import { View } from 'react-native';
import { HeaderConfigType } from '~/application/type/header-config-type';
import CustomFontInterBold from '~/infrastructure/ui/pages/shared/helper/custom-font-inter-bold';
import CustomFontInterRegular from '~/infrastructure/ui/pages/shared/helper/custom-font-inter-regular';

const GenericHeaderText = ({ style, firstText, firstTextStyle, secondText, secondTextStyle }: HeaderConfigType) => {
    return (
        <View style={style}>
            <CustomFontInterBold text={firstText} style={firstTextStyle} />
            <CustomFontInterRegular text={secondText} style={secondTextStyle} />
        </View>
    );
};

export default GenericHeaderText;
