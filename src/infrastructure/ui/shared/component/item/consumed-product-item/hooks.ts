import { useCallback, useMemo, useState } from 'react';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import getColorFromPercentage from '~/infrastructure/ui/shared/helper/get-color-from-percentage';
import useConsumedProductPageService from '~/application/page-service/consumed-products-page-service';
import { ConsumedProductItemDataProps } from '~/domain/interfaces/props/search-list/item/consumed-product/consumed-product-item-data-props';
import { useStore } from '~/infrastructure/controllers/store';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';

const useConsumedProductItemData = ({
    barcode,
    id,
    consumedQuantity,
    isFavourite,
    score,
    serving
}: ConsumedProductItemDataProps) => {
    const {
        ConsumedProductStore: {
            setConsumedProducts,
            editConsumedProductQuantity,
            consumedProducts,
            toggleFavoriteConsumedProducts
        }
    } = useStore();

    const { deleteConsumedProduct, editQuantityConsumedProduct } = useConsumedProductPageService();

    const [isExpended, setIsExpended] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editModalQuantity, setEditModalQuantity] = useState(String(consumedQuantity));

    const itemHeight = useSharedValue(100);
    const scorePercentage = score / 100;

    const scoreColor = getColorFromPercentage(score);

    const animatedItemStyle = useAnimatedStyle(() => {
        return {
            height: withTiming(itemHeight.value * (isExpended ? 4.7 : 1), { duration: 500 })
        };
    });

    const round = (value: number): number => {
        const newValue: number = value * (consumedQuantity / 100);
        return Number(newValue.toFixed(2));
    };

    const onPressProduct = () => {
        setIsExpended((prevState) => !prevState);
    };

    const onPressDeleteButton = () => {
        setIsDeleteModalOpen(true);
    };

    const onPressCancelDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    const onPressEditQuantityButton = () => {
        setIsEditModalOpen(true);
    };

    const onPressEditModalButton = useCallback(() => {
        const newQuantity = Number(editModalQuantity);

        const editProductQuantity = async () => {
            await editQuantityConsumedProduct(barcode, newQuantity);
        };

        void editProductQuantity();
        editConsumedProductQuantity(id, newQuantity);
        setIsEditModalOpen(false);
    }, [barcode, editConsumedProductQuantity, editModalQuantity, editQuantityConsumedProduct, id]);

    const onPressAddServing = () => {
        setEditModalQuantity(String(consumedQuantity + Number(serving)));
    };

    const onPressValidateDeleteModal = useCallback(() => {
        const deleteProduct = async () => {
            const newConsumedProductItems = await deleteConsumedProduct(id);
            setConsumedProducts(newConsumedProductItems ?? consumedProducts);
        };

        void deleteProduct();
        setIsExpended(false);
        setIsDeleteModalOpen(false);
    }, [consumedProducts, deleteConsumedProduct, id, setConsumedProducts]);

    const favouriteIcon = useMemo(() => {
        return isFavourite
            ? require('~/domain/entities/assets/icon/favourite-icon/favourite.svg')
            : require('~/domain/entities/assets/icon/favourite-icon/unfilled-favourite.svg');
    }, [isFavourite]);

    const customFontInterBold = useCustomFontInterBold().text;

    return {
        customFontInterBold,
        isExpended,
        onPressProduct,
        animatedItemStyle,
        isDeleteModalOpen,
        setIsDeleteModalOpen,
        isEditModalOpen,
        setIsEditModalOpen,
        editModalQuantity,
        setEditModalQuantity,
        favouriteIcon,
        scoreColor,
        scorePercentage,
        onPressValidateDeleteModal,
        onPressDeleteButton,
        onPressEditModalButton,
        onPressCancelDeleteModal,
        onPressAddServing,
        onPressEditQuantityButton,
        round,
        toggleFavoriteConsumedProducts
    };
};

export default useConsumedProductItemData;
