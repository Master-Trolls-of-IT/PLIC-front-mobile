import { useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import { isValidInput } from '~/infrastructure/ui/shared/helper/is-valid-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { MealData, ProductQuantity } from '~/domain/interfaces/services/meal-data';
import useMealPageService from '~/application/page-service/meal-page-service';

const useCreateRecipePageData = () => {
    const {
        MealStore: { addMeal, mealProducts, mealTags, resetCreateMealStore },
        NavigationStore: { navigate, goBack },
        UserStore: { userData }
    } = useStore();

    const { saveMeal } = useMealPageService();
    const [errorMessage, setErrorMessage] = useState(false);
    const [isValidateModalVisible, setIsValidateModalVisible] = useState(false);
    const [recipeTitleInput, setRecipeTitleInput] = useState('');
    const [recipeDurationInput, setRecipeDurationInput] = useState('');
    const [inputBarCode, setInputBarCode] = useState('');
    const onPressCancelModal = () => {
        setIsValidateModalVisible(false);
    };

    const onPressScanProduct = () => {
        navigate(PagesEnum.CreateMealScanPage);
    };

    const onPressValidateButton = () => {
        if (isValidInput(recipeTitleInput, InputEnum.Title) && mealProducts.length > 0) {
            setErrorMessage(false);
            setIsValidateModalVisible(true);
        } else {
            setErrorMessage(true);
        }
    };

    const onPressBackArrow = () => {
        resetCreateMealStore();
        goBack();
    };

    const onPressValidateModalValidate = async () => {
        setIsValidateModalVisible(false);
        const mealData: MealData = {
            title: recipeTitleInput,
            tags: mealTags,
            email: userData.email,
            products: mealProducts.map((product) => {
                return { barcode: product.barcode, quantity: product.consumedQuantity } as ProductQuantity;
            })
        };

        const mealItemProps = await saveMeal(mealData);
        addMeal(mealItemProps);
        resetCreateMealStore();
        goBack();
    };
    const [newDiffuculty, setNewDifficulty] = useState<{ label: string; value: string }>();
    return {
        errorMessage,
        goBack,
        isValidateModalVisible,
        inputBarCode,
        setInputBarCode,
        setIsValidateModalVisible,
        recipeTitleInput,
        setRecipeTitleInput,
        recipeDurationInput,
        setRecipeDurationInput,
        recipeDifficultyInput: { input: newDiffuculty, dispatch: setNewDifficulty },
        onPressCancelModal,
        onPressScanProduct,
        onPressValidateButton,
        onPressValidateModalValidate,
        onPressBackArrow,
        mealProducts
    };
};

export default useCreateRecipePageData;
