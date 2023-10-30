import React from 'react';
import GenericInputWithSearchIconAndEndText from '~/infrastructure/ui/shared/component/inputs/generic-input-with-search-icon-and-end-text/generic-input-with-search-icon-and-end-text';
import GenericButton from '~/infrastructure/ui/shared/component/generic-button/generic-button';
import CustomModal from '~/infrastructure/ui/shared/component/modal/custom-modal/custom-modal';
import ModalAddQuantityStyle from '~/infrastructure/ui/shared/component/modal/modal-add-quantity/modal-add-quantity-style';
import useModalAddQuantityData from '~/infrastructure/ui/shared/component/modal/modal-add-quantity/hooks';
import { ModalAddQuantityProps } from '~/domain/interfaces/props/modal/modal-add-quantity/modal-add-quantity-props';

const ModalAddQuantity = ({
    title,
    modal,
    setModal,
    addQuantity,
    isWater,
    serving,
    defaultQuantity
}: ModalAddQuantityProps) => {
    const { quantity, setQuantity, onPressAddServing, onPressSearchIcon, servingQuantity } = useModalAddQuantityData({
        setModal,
        addQuantity,
        isWater,
        serving,
        defaultQuantity
    });

    return (
        <CustomModal
            isVisible={modal}
            dispatch={setModal}
            title={title ?? 'Ajouter la quantité\n consommée'}
            titleSize={22}>
            <GenericInputWithSearchIconAndEndText
                placeHolder={isWater ? '25' : '100'}
                endText={isWater ? 'cl' : 'g'}
                style={ModalAddQuantityStyle.customModalChildren}
                input={quantity}
                dispatch={setQuantity}
                onPressSearchIcon={onPressSearchIcon}
            />

            {servingQuantity ? (
                <GenericButton
                    title={'Ajouter une portion'}
                    onPress={onPressAddServing}
                    style={{
                        container: ModalAddQuantityStyle.quantityModalButtonContainer,
                        text: ModalAddQuantityStyle.quantityModalButtonText
                    }}
                />
            ) : (
                <></>
            )}
        </CustomModal>
    );
};

export default ModalAddQuantity;
