import { useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import { isValidInput } from '~/infrastructure/ui/shared/helper/is-valid-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import useRecipePageService from '~/application/page-service/recipe-page-service';
import { RecipeData } from '~/domain/interfaces/services/recipe-data';

const useCreateRecipePageData = () => {
    const {
        RecipeStore: { addRecipe, resetCreateRecipeStore, recipeTags },
        NavigationStore: { goBack },
        UserStore: { userData }
    } = useStore();

    const { saveRecipe } = useRecipePageService();
    const [errorMessage, setErrorMessage] = useState(false);
    const [isValidateModalVisible, setIsValidateModalVisible] = useState(false);
    const [recipeTitleInput, setRecipeTitleInput] = useState('');
    const [recipeDurationInput, setRecipeDurationInput] = useState('');
    const [ModalVisible, setIsModalVisible] = useState(false);
    const [ingredientList, setIngredientList] = useState<string[]>([]);
    const [stepList, setStepList] = useState<string[]>([]);
    const [searchInput, setSearchInput] = useState('');
    const [newPlusHeight, newPlusWidth] = [17, 17];
    const [newDiffuculty, setNewDifficulty] = useState<{ label: string; value: string }>({
        label: 'Facile',
        value: 'Facile'
    });
    const [stepBool, setStepBool] = useState(false);

    const assetPlus = require('~/domain/entities/assets/icon/tags/icon-plus.svg');

    const onPressCancelModal = () => {
        setIsValidateModalVisible(false);
    };

    const onPressIngredientPlus = () => {
        setIsModalVisible(true);
    };

    const onPressValidateIngredientModal = () => {
        setIsModalVisible(false);
        setSearchInput('');
        setIngredientList([...ingredientList, searchInput]);
    };

    const onPressNextButton = () => {
        setStepBool(true);
    };

    const onPressValidateStepModal = () => {
        setIsModalVisible(false);
        setSearchInput('');
        setStepList([...stepList, searchInput]);
    };

    const onPressValidateButton = () => {
        if (isValidInput(recipeTitleInput, InputEnum.Title) && ingredientList.length > 0) {
            setErrorMessage(false);
            setIsValidateModalVisible(true);
        } else {
            setErrorMessage(true);
        }
    };

    const onPressBackArrow = () => {
        resetCreateRecipeStore();
        goBack();
    };

    const onPressValidateModalValidate = async () => {
        setIsValidateModalVisible(false);
        const recipeData: RecipeData = {
            title: recipeTitleInput,
            tags: recipeTags,
            email: userData.email,
            ingredients: ingredientList,
            steps: stepList,
            difficulty: newDiffuculty?.value as string,
            duration: parseInt(recipeDurationInput)
        };
        const recipeItemProps = await saveRecipe(recipeData);
        addRecipe(recipeItemProps);
        resetCreateRecipeStore();
        goBack();
    };
    const onPressWrongIconModal = () => {
        setIsModalVisible(false);
        setSearchInput('');
    };

    const customFontInterBoldValue = CustomFontInterBold();
    return {
        errorMessage,
        goBack,
        isValidateModalVisible,
        setIsValidateModalVisible,
        recipeTitleInput,
        setRecipeTitleInput,
        recipeDurationInput,
        setRecipeDurationInput,
        recipeDifficultyInput: { input: newDiffuculty, dispatch: setNewDifficulty },
        onPressCancelModal,
        onPressValidateButton,
        onPressValidateStepModal,
        onPressValidateModalValidate,
        onPressBackArrow,
        newPlusHeight,
        newPlusWidth,
        assetPlus,
        onPressIngredientPlus,
        ModalVisible,
        ingredientList,
        stepList,
        setSearchInput,
        searchInput,
        onPressWrongIconModal,
        onPressValidateIngredientModal,
        stepBool,
        onPressNextButton,
        customFontInterBoldValue
    };
};

export default useCreateRecipePageData;
