import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { CustomModalProps } from '~/domain/interfaces/props/custom-modal/custom-modal-props';
import CustomModalStyle from '~/infrastructure/ui/shared/component/modal/custom-modal/custom-modal-style';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import useCustomModalData from '~/infrastructure/ui/shared/component/modal/custom-modal/hooks';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';

const CustomModal = ({ children, isVisible, dispatch, title, titleSize }: CustomModalProps) => {
    const { height, width, onPressWrongButton, wrongAsset } = useCustomModalData();

    return (
        <Modal visible={isVisible} animationType={'fade'} transparent>
            <View style={CustomModalStyle.container}>
                <View style={CustomModalStyle.modalView}>
                    <TouchableOpacity onPress={() => onPressWrongButton(dispatch)} style={CustomModalStyle.wrongAsset}>
                        <CustomSvg asset={wrongAsset} height={height} width={width} />
                    </TouchableOpacity>

                    <Text style={{ ...CustomModalStyle.title, fontSize: titleSize, ...CustomFontInterBold().text }}>
                        {title}
                    </Text>
                    {children}
                </View>
            </View>
        </Modal>
    );
};

export default CustomModal;
