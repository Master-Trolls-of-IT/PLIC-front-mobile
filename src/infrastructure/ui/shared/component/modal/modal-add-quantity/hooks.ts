import { useState } from 'react';
import { ModalAddQuantityDataProps } from '~/domain/interfaces/props/modal/modal-add-quantity/modal-add-quantity-data-props';

const useModalAddQuantityData = ({
    setModal,
    addQuantity,
    isWater,
    serving,
    defaultQuantity
}: ModalAddQuantityDataProps) => {
    const [quantity, setQuantity] = useState(defaultQuantity ?? '');

    const servingQuantity = isWater ? 25 : serving ?? 0;

    const onPressAddServing = () => {
        setQuantity(String(Number(quantity) + servingQuantity));
    };

    // TODO : Ajout de la quantité d'eau consommée dans le store
    const onPressSearchIcon = async () => {
        setModal(false);
        void addQuantity(quantity);
    };

    return { quantity, setQuantity, onPressAddServing, onPressSearchIcon, servingQuantity };
};

export default useModalAddQuantityData;
