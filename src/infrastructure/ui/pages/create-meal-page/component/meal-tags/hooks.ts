import { useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import { MealItemTag } from '~/domain/interfaces/props/tags/meal-item-tag';

const useMealTagsData = () => {
    const {
        CreateMealStore: { mealTags, setMealTags }
    } = useStore();

    const [isTagsModalVisible, setIsTagsModalVisible] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [mealTagsSelected, setMealTagsSelected] = useState<MealItemTag[]>([]);

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
