import { useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import { ItemTag } from '~/domain/interfaces/props/tags/item-tag';

const useRecipeTagsData = () => {
    const {
        RecipeStore: { recipeTags, setRecipeTags }
    } = useStore();

    const [isTagsModalVisible, setIsTagsModalVisible] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [recipeTagsSelected, setRecipeTagsSelected] = useState<ItemTag[]>([]);

    const [newPlusHeight, newPlusWidth] = [17, 17];
    const assetPlus = require('~/domain/entities/assets/icon/tags/icon-plus.svg');

    const onPressTagPlus = () => {
        setIsTagsModalVisible(true);
    };

    const onPressWrongIconTagsModal = () => {
        setIsTagsModalVisible(false);
        setSearchInput('');
    };

    const onPressValidateTagsModal = () => {
        setIsTagsModalVisible(false);
        setSearchInput('');
        setRecipeTags(recipeTagsSelected);
    };

    return {
        assetPlus,
        isTagsModalVisible,
        onPressWrongIconTagsModal,
        searchInput,
        setSearchInput,
        newPlusHeight,
        newPlusWidth,
        recipeTags,
        recipeTagsSelected,
        setRecipeTagsSelected,
        onPressTagPlus,
        onPressValidateTagsModal
    };
};

export default useRecipeTagsData;
