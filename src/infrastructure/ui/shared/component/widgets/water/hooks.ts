import { useState } from 'react';

const useWidgetWaterData = () => {
    const [quantity, setQuantity] = useState(0);

    const assetWaterGlass = require('~/domain/entities/assets/icon/water-icon/icon-water-glass.svg');
    const newWaterGlassHeight = 50;
    const newWaterGlassWidth = 50;

    const goal = 2;

    // TODO : Lier cette variable à la valeur renseigner par l'utilisateur dans les préférences
    const glassQuantity = 0.25;

    const onPressUpArrow = () => {
        setQuantity(quantity + glassQuantity);
    };

    const onPressDownArrow = () => {
        if (quantity >= glassQuantity) setQuantity(quantity - glassQuantity);
        else setQuantity(0);
    };

    const round = (value: number) => {
        return value.toFixed(2);
    };

    return {
        assetWaterGlass,
        newWaterGlassHeight,
        newWaterGlassWidth,
        goal,
        quantity,
        onPressUpArrow,
        onPressDownArrow,
        round
    };
};

export default useWidgetWaterData;
