import { useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import { isValidInput } from '~/infrastructure/ui/shared/helper/is-valid-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { MealData, ProductQuantity } from '~/domain/interfaces/services/meal-data';
import useMealPageService from '~/application/page-service/meal-page-service';

const useCreateMealPageData = () => {
    const {
        MealStore: { mealProducts, mealTags, resetStore },
        NavigationStore: { navigate, goBack },
        UserStore: { userData }
    } = useStore();

    const { addMeal } = useMealPageService();
    const [errorMessage, setErrorMessage] = useState(false);
    const [isValidateModalVisible, setIsValidateModalVisible] = useState(false);
    const [mealTitleInput, setMealTitleInput] = useState('');
    const [inputBarCode, setInputBarCode] = useState('');

    const onPressCancelModal = () => {
        setIsValidateModalVisible(false);
    };

    const onPressScanProduct = () => {
        navigate(PagesEnum.CreateMealScanPage);
    };

    const onPressValidateButton = () => {
        if (isValidInput(mealTitleInput, InputEnum.Title) && mealProducts.length > 0) {
            setErrorMessage(false);
            setIsValidateModalVisible(true);
        } else {
            setErrorMessage(true);
        }
    };

    const onPressBackArrow = () => {
        resetStore();
        goBack();
    };

    const onPressValidateModalValidate = async () => {
        setIsValidateModalVisible(false);
        const mealData: MealData = {
            title: mealTitleInput,
            tags: mealTags,
            email: userData.email,
            products: mealProducts.map((product) => {
                return { barcode: product.barcode, quantity: product.barcode } as ProductQuantity;
            })
        };

        await addMeal(mealData);
        resetStore();
        goBack();
    };

    return {
        errorMessage,
        goBack,
        isValidateModalVisible,
        inputBarCode,
        setInputBarCode,
        setIsValidateModalVisible,
        mealTitleInput,
        setMealTitleInput,
        onPressCancelModal,
        onPressScanProduct,
        onPressValidateButton,
        onPressValidateModalValidate,
        onPressBackArrow,
        mealProducts
    };
};

export default useCreateMealPageData;
