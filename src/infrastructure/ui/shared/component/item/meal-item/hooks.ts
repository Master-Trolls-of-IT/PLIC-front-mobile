import { useEffect, useMemo, useState } from 'react';
import { useAnimatedStyle, useSharedValue, withDelay, withSequence, withTiming } from 'react-native-reanimated';
import { Animated } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import { MealItemDataProps } from '~/domain/interfaces/props/search-list/item/meal-item/meal-item-data-props';
import MealItemStyle from '~/infrastructure/ui/shared/component/item/meal-item/meal-item-style';
import { useStore } from '~/infrastructure/controllers/store';

const useMealItemData = ({ score, isFavourite }: MealItemDataProps) => {
    const {
        MealStore: { toggleFavorite }
    } = useStore();

    const [isExpanded, setIsExpanded] = useState(false);
    const expandedContentHeight = useSharedValue(120);
    const [showExpandedView, setShowExpandedView] = useState(false);

    const restaurantIcon = require('~/domain/entities/assets/meal-page/meal-item/icon-restaurant.svg');
    const deleteIcon = require('~/domain/entities/assets/meal-page/meal-item/icon-delete.svg');
    const editIcon = require('~/domain/entities/assets/meal-page/meal-item/icon-edit.svg');

    const [imageNewHeight, imageNewWidth] = [92, 69];
    const [favouriteNewHeight, favouriteNewWidth] = [30, 30];
    const [deleteNewHeight, deleteNewWidth] = [40, 40];
    const [editNewHeight, editNewWidth] = [40, 40];
    const [expandAnimationTime, showButtonsAnimationTime] = [400, 200];

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
        toggleFavorite,
        scoreStyle,
        isExpanded,
        setIsExpanded,
        animatedItemStyle,
        expandedContentHeight,
        showExpandedView,
        showButtonsAnimationTime
    };
};

export default useMealItemData;
