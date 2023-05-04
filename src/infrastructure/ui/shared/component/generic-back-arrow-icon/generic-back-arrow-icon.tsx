import React from 'react';
import { TouchableOpacity } from 'react-native';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import { GenericBackArrowIconProps } from '~/domain/interfaces/props/generic-back-arrow-icon-props';
import useGenericBackArrowIconData from '~/infrastructure/ui/shared/component/generic-back-arrow-icon/hooks';
import GenericBackArrowIconStyle from '~/infrastructure/ui/shared/component/generic-back-arrow-icon/generic-back-arrow-icon-style';

const GenericBackArrowIcon = ({ goBack }: GenericBackArrowIconProps) => {
    const { asset, newHeight, newWidth, onPressBackArrow } = useGenericBackArrowIconData(goBack);

    return (
        <TouchableOpacity style={GenericBackArrowIconStyle.container} onPress={onPressBackArrow}>
            <CustomSvg
                asset={asset}
                style={GenericBackArrowIconStyle.iconContainer}
                height={newHeight}
                width={newWidth}
            />
        </TouchableOpacity>
    );
};

export default GenericBackArrowIcon;
