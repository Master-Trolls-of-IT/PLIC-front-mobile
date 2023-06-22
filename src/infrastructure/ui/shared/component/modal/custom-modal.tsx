import React from 'react';
import { Modal, Text, View } from 'react-native';
import { CustomModalProps } from '~/domain/interfaces/props/custom-modal-props';
import CustomModalStyle from '~/infrastructure/ui/shared/component/modal/custom-modal-style';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';

const CustomModal = ({ children, isVisible, title }: CustomModalProps) => {
    return (
        <Modal visible={isVisible} animationType={'fade'} transparent>
            <View style={CustomModalStyle.container}>
                <View style={CustomModalStyle.modalView}>
                    <Text style={{ ...CustomModalStyle.title, ...CustomFontInterBold().text }}>{title}</Text>
                    {children}
                </View>
            </View>
        </Modal>
    );
};

export default CustomModal;
