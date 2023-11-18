import { useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import { RecipeTagsComponentDataProps } from '~/domain/interfaces/props/tags/recipe-tags-component-data-props';

const useTagsComponentData = ({ tag, isCross, recipeTagsSelected, dispatch }: RecipeTagsComponentDataProps) => {
    const {
        RecipeStore: { deleteRecipeTag }
    } = useStore();

    const [isSelected, setIsSelected] = useState(!isCross && recipeTagsSelected.includes(tag));

    const assetCross = require('~/domain/entities/assets/icon/tags/icon-cross.svg');
    const [newCrossHeight, newCrossWidth] = [12, 12];

    const assetSelected = require('~/domain/entities/assets/icon/icon-chosen.svg');
    const [newSelectedHeight, newSelectedWidth] = [20, 20];

    const onPressTagCross = () => {
        deleteRecipeTag(tag);
        dispatch(recipeTagsSelected.filter((tagItem) => tagItem.label != tag.label));
    };

    const onPressTagContainer = () => {
        if (isSelected) {
            dispatch(recipeTagsSelected.filter((tagItem) => tagItem.label != tag.label));
            setIsSelected(false);
        } else {
            dispatch([...recipeTagsSelected, tag]);
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

export default useTagsComponentData;
