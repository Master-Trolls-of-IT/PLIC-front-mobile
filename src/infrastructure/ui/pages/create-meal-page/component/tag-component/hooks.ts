import { useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import { TagComponentDataProps } from '~/domain/interfaces/props/tag-component-data-props';

const useTagComponentData = ({ tag, isCross, mealTagsSelected, dispatch }: TagComponentDataProps) => {
    const {
        CreateMealStore: { deleteMealTag }
    } = useStore();

    const [isSelected, setIsSelected] = useState(!isCross && mealTagsSelected.includes(tag));

    const assetCross = require('~/domain/entities/assets/icon/icon-cross.svg');
    const [newCrossHeight, newCrossWidth] = [12, 12];

    const assetSelected = require('~/domain/entities/assets/icon/icon-chosen.svg');
    const [newSelectedHeight, newSelectedWidth] = [20, 20];

    const onPressTagCross = () => {
        deleteMealTag(tag);
        dispatch(mealTagsSelected.filter((tagItem) => tagItem.label != tag.label));
    };

    const onPressTagContainer = () => {
        if (isSelected) {
            dispatch(mealTagsSelected.filter((tagItem) => tagItem.label != tag.label));
            setIsSelected(false);
        } else {
            dispatch([...mealTagsSelected, tag]);
            setIsSelected(true);
        }
    };

    return {
        assetCross,
        assetSelected,
        isSelected,
        newCrossWidth,
        newCrossHeight,
        newSelectedHeight,
        newSelectedWidth,
        onPressTagCross,
        onPressTagContainer
    };
};

export default useTagComponentData;
