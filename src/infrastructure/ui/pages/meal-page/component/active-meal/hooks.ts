import { useState } from 'react';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { ConsumedProductItemProps } from '~/domain/interfaces/props/search-list/consumed-product-props';

const useMealPageActiveItemData = () => {
    const horizontalScrollLineAsset = require('~/domain/entities/assets/icon/icon-horizontal-scroll-line.svg');

    const [inputMealName, setInputMealName] = useState('');
    const [newTag, setNewTag] = useState<{ label: string; value: string }>({ label: 'Autre', value: '2' });

    const interBoldText = CustomFontInterBold().text;

    const mockData: ConsumedProductItemProps[] = [
        {
            id: '1',
            name: 'Boisson gazéfiée',
            brand: 'Coca Zéro',
            score: NaN,
            image: 'https://images.openfoodfacts.org/images/products/544/900/021/4911/front_fr.200.400.jpg',
            isFavourite: false,
            toggleFavourite: () => {},
            data: {
                carbohydrates: 399,
                energyKcal: 6,
                energyKj: 56,
                fat: 2,
                fiber: 45,
                proteins: 90,
                salt: 1,
                saturatedFat: 3,
                sugar: 89
            },
            consumedQuantity: 9,
            style: {}
        }
    ];
    return {
        horizontalScrollLineAsset,
        interBoldText,
        inputMealName: { input: inputMealName, dispatch: setInputMealName },
        inputTag: { input: newTag, dispatch: setNewTag },
        mockData
    };
};

export default useMealPageActiveItemData;
