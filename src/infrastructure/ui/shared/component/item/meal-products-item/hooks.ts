import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useCallback, useState } from 'react';
import { MealProductsItemDataProps } from '~/domain/interfaces/props/search-list/meal-products-item-data-props';
import getColorFromPercentage from '~/infrastructure/ui/shared/helper/get-color-from-percentage';

const useMealProductsItemData = ({ score }: MealProductsItemDataProps) => {
    const [isExpended, setIsExpended] = useState(false);

    const scorePercentage = score / 100;
    const scoreColor = getColorFromPercentage(score);

    const itemHeight = useSharedValue(100);
    const animatedItemStyle = useAnimatedStyle(() => {
        return {
            height: withTiming(itemHeight.value * (isExpended ? 2.4 : 1), { duration: 500 })
        };
    });

    const onPressProduct = () => {
        setIsExpended((prevState) => !prevState);
    };

    // TODO : Ajout de la logique pour modifier la quantité consommée d'un produit
    const onPressEditMealProductQuantity = () => {};

    // TODO : Ajout de la logique de suppression d'un item
    const onPressDeleteMealProduct = useCallback((id: string) => {}, []);

    return {
        animatedItemStyle,
        isExpended,
        onPressDeleteMealProduct,
        onPressEditMealProductQuantity,
        onPressProduct,
        scoreColor,
        scorePercentage
    };
};

export default useMealProductsItemData;
