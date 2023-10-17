import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useState } from 'react';
import getColorFromPercentage from '~/infrastructure/ui/shared/helper/get-color-from-percentage';
import { useStore } from '~/infrastructure/controllers/store';
import { MealProductsItemDataProps } from '~/domain/interfaces/props/search-list/item/meal-products-item/meal-products-item-data-props';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';

const useMealProductsItemData = ({ id, score, consumedQuantity, isWater, serving }: MealProductsItemDataProps) => {
    const {
        CreateMealStore: { deleteMealProduct, editMealProductQuantity }
    } = useStore();

    const [isExpended, setIsExpended] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(consumedQuantity);

    const scorePercentage = score / 100;
    const scoreColor = getColorFromPercentage(score);

    const itemHeight = useSharedValue(100);
    const animatedItemStyle = useAnimatedStyle(() => {
        return {
            height: withTiming(itemHeight.value * (isExpended ? 2.4 : 1), { duration: 500 })
        };
    });

    const servingQuantity = isWater ? 25 : serving ?? 0;

    const onPressProduct = () => {
        setIsExpended((prevState) => !prevState);
    };

    const onPressEditMealProductQuantity = () => {
        setIsEditModalOpen(true);
    };

    const onPressDeleteMealProduct = () => {
        setIsDeleteModalOpen(true);
    };

    const onPressValidateEditModal = async () => {
        setIsEditModalOpen(false);
        editMealProductQuantity(id, quantity);
        setQuantity('');
    };

    const onPressAddServing = () => {
        setQuantity(String(Number(quantity) + servingQuantity));
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
        animatedItemStyle,
        customFontInterBold,
        isEditModalOpen,
        setIsEditModalOpen,
        isDeleteModalOpen,
        setIsDeleteModalOpen,
        isExpended,
        onPressDeleteMealProduct,
        onPressEditMealProductQuantity,
        onPressValidateEditModal,
        onPressProduct,
        scoreColor,
        scorePercentage,
        servingQuantity,
        onPressAddServing,
        setQuantity,
        onPressCancelDeleteModal,
        onPressDeleteModal,
        onPressValidateDeleteModal
    };
};

export default useMealProductsItemData;
