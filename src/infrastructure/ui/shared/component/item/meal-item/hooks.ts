import { useEffect, useMemo, useState } from 'react';
import { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import { MealItemDataProps } from '~/domain/interfaces/props/search-list/item/meal-item/meal-item-data-props';
import MealItemStyle from '~/infrastructure/ui/shared/component/item/meal-item/meal-item-style';
import { useStore } from '~/infrastructure/controllers/store';
import useMealPageService from '~/application/page-service/meal-page-service';
import useCustomFontInterBold from '~/application/utils/font/custom-font-inter-bold-hooks';

const useMealItemData = ({ score, isFavourite, products, id }: MealItemDataProps) => {
    const {
        MealStore: { toggleFavorite, deleteMeal, getMeal }
    } = useStore();

    const { deleteMeal: deleteMealService, consumeMeal } = useMealPageService();
    const [isExpanded, setIsExpanded] = useState(false);
    const expandedContentHeight = useSharedValue(120);
    const [showExpandedView, setShowExpandedView] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isConsumeModalOpen, setIsConsumeModalOpen] = useState(false);

    const restaurantIcon = require('~/domain/entities/assets/meal-page/meal-item/icon-restaurant.svg');
    const deleteIcon = require('~/domain/entities/assets/meal-page/meal-item/icon-delete.svg');
    const editIcon = require('~/domain/entities/assets/meal-page/meal-item/icon-edit.svg');

    const [imageNewHeight, imageNewWidth] = [92, 69];
    const [favouriteNewHeight, favouriteNewWidth] = [30, 30];
    const [deleteNewHeight, deleteNewWidth] = [40, 40];
    const [editNewHeight, editNewWidth] = [40, 40];
    const [expandAnimationTime, showButtonsAnimationTime] = [400, 200];

    const customFontInterBold = useCustomFontInterBold().text;

    const favouriteIcon = useMemo(() => {
        return isFavourite
            ? require('~/domain/entities/assets/icon/favourite-icon/favourite.svg')
            : require('~/domain/entities/assets/icon/favourite-icon/unfilled-favourite.svg');
    }, [isFavourite]);

    const animatedItemStyle = useAnimatedStyle(() => {
        return {
            height: withDelay(
                isExpanded ? 0 : showButtonsAnimationTime,
                withTiming(isExpanded ? expandedContentHeight.value * 1.4 : expandedContentHeight.value, {
                    duration: expandAnimationTime
                })
            )
        };
    });

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleFavourite = () => {
        toggleFavorite(id);
    };
    const productNames = products
        .map((product) => {
            return product.name;
        })
        .join(' • ');

    const onPressDeleteButton = () => {
        setIsDeleteModalOpen(true);
    };

    const onPressCancelDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    const onPressValidateDeleteModal = async () => {
        await deleteMealService(id);
        deleteMeal(id);
        setIsDeleteModalOpen(false);
    };

    const onPressConsumeMealButton = () => {
        setIsConsumeModalOpen(true);
    };

    const onPressCancelConsumeModal = () => {
        setIsConsumeModalOpen(false);
    };

    const onPressValidateConsumeModal = async () => {
        const meal = getMeal(id);
        await consumeMeal(meal);
        setIsConsumeModalOpen(false);
    };

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setShowExpandedView(isExpanded);
        }, expandAnimationTime);
        return () => {
            clearTimeout(timeOut);
        };
    }, [expandAnimationTime, isExpanded]);

    const scoreStyle = useMemo(() => {
        switch (true) {
            case score < 33:
                return { ...MealItemStyle.score, color: ColorEnum.ClassicRedWidget };
            case score < 66:
                return { ...MealItemStyle.score, color: ColorEnum.MealPageOrange };
            default:
                return { ...MealItemStyle.score, color: ColorEnum.ClassicDarkGreen };
        }
    }, [score]);

    return {
        favouriteIcon,
        favouriteNewHeight,
        favouriteNewWidth,
        restaurantIcon,
        imageNewHeight,
        imageNewWidth,
        deleteIcon,
        deleteNewHeight,
        deleteNewWidth,
        editIcon,
        editNewHeight,
        editNewWidth,
        toggleFavourite,
        scoreStyle,
        isExpanded,
        toggleExpand,
        animatedItemStyle,
        showExpandedView,
        showButtonsAnimationTime,
        productNames,
        onPressConsumeMealButton,
        onPressValidateConsumeModal,
        onPressDeleteButton,
        isDeleteModalOpen,
        isConsumeModalOpen,
        setIsDeleteModalOpen,
        setIsConsumeModalOpen,
        onPressCancelConsumeModal,
        onPressCancelDeleteModal,
        onPressValidateDeleteModal,
        customFontInterBold
    };
};

export default useMealItemData;
