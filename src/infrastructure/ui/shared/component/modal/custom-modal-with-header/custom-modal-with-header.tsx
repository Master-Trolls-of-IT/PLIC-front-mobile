import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import CustomModalStyle from '~/infrastructure/ui/shared/component/modal/custom-modal/custom-modal-style';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { CustomModalWithHeaderProps } from '~/domain/interfaces/props/custom-modal/custom-modal-with-header-props';
import useCustomModalWithHeaderData from '~/infrastructure/ui/shared/component/modal/custom-modal-with-header/hooks';
import CustomModalWithHeaderStyle from '~/infrastructure/ui/shared/component/modal/custom-modal-with-header/custom-modal-with-header-style';

const CustomModalWithHeader = ({ title, titleSize, dispatch, isVisible, children }: CustomModalWithHeaderProps) => {
    const { newWrongHeight, newWrongWidth, onPressWrongButton, wrongAsset } = useCustomModalWithHeaderData();

    return (
        <Modal visible={isVisible} animationType={'fade'} transparent>
            <View style={{ ...CustomModalWithHeaderStyle.container }}>
                <View style={CustomModalWithHeaderStyle.modalView}>
                    <TouchableOpacity onPress={() => onPressWrongButton(dispatch)} style={CustomModalStyle.wrongAsset}>
                        <CustomSvg asset={wrongAsset} height={newWrongHeight} width={newWrongWidth} />
                    </TouchableOpacity>

                    <Text
                        style={{
                            ...CustomModalWithHeaderStyle.title,
                            ...CustomFontInterBold().text,
                            fontSize: titleSize || 24
                        }}>
                        {title}
                    </Text>

                    <View style={CustomModalWithHeaderStyle.childrenContainer}>{children}</View>
                </View>
            </View>
        </Modal>
    );
};

export default CustomModalWithHeader;
