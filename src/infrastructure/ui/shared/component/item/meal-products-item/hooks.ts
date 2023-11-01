import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useState } from 'react';
import getColorFromPercentage from '~/infrastructure/ui/shared/helper/get-color-from-percentage';
import { useStore } from '~/infrastructure/controllers/store';
import { MealProductsItemDataProps } from '~/domain/interfaces/props/search-list/item/meal-products-item/meal-products-item-data-props';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';

const useMealProductsItemData = ({ id, score }: MealProductsItemDataProps) => {
    const {
        MealStore: { deleteMealProduct, editMealProductQuantity }
    } = useStore();

    const [isExpended, setIsExpended] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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

    const onPressEditMealProductQuantity = () => {
        setIsEditModalOpen(true);
    };

    const addQuantity = async (quantity: string) => {
        editMealProductQuantity(id, quantity);
    };

    const onPressDeleteModal = () => {
        setIsDeleteModalOpen(true);
    };

    const onPressCancelDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    const onPressValidateDeleteModal = () => {
        deleteMealProduct(id);
        setIsDeleteModalOpen(false);
    };

    const customFontInterBold = CustomFontInterBold().text;

    return {
        addQuantity,
        animatedItemStyle,
        customFontInterBold,
        isEditModalOpen,
        setIsEditModalOpen,
        isDeleteModalOpen,
        setIsDeleteModalOpen,
        isExpended,
        onPressEditMealProductQuantity,
        onPressProduct,
        scoreColor,
        scorePercentage,
        onPressCancelDeleteModal,
        onPressDeleteModal,
        onPressValidateDeleteModal
    };
};

export default useMealProductsItemData;
