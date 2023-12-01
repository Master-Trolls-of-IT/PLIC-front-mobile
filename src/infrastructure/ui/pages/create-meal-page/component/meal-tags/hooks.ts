import { useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import { ItemTag } from '~/domain/interfaces/props/tags/item-tag';

const useMealTagsData = () => {
    const {
        MealStore: { mealTags, setMealTags }
    } = useStore();

    const [isTagsModalVisible, setIsTagsModalVisible] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [mealTagsSelected, setMealTagsSelected] = useState<ItemTag[]>([]);

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
        setMealTags(mealTagsSelected);
    };

    return {
        assetPlus,
        isTagsModalVisible,
        onPressWrongIconTagsModal,
        searchInput,
        setSearchInput,
        newPlusHeight,
        newPlusWidth,
        mealTags,
        mealTagsSelected,
        setMealTagsSelected,
        onPressTagPlus,
        onPressValidateTagsModal
    };
};

export default useMealTagsData;
