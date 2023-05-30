import React from 'react';
import { Modal, View } from 'react-native';
import { CustomModalProps } from '~/domain/interfaces/props/custom-modal-props';
import CustomModalStyle from '~/infrastructure/ui/shared/component/modal/custom-modal-style';

const CustomModal = ({ children, isVisible }: CustomModalProps) => {
    return (
        <Modal visible={isVisible} animationType={'fade'} transparent>
            <View style={CustomModalStyle.container}>
                <View style={CustomModalStyle.modalView}>{children}</View>
            </View>
        </Modal>
    );
};

export default CustomModal;
