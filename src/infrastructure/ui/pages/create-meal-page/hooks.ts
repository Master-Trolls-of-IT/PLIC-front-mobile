import { useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import { isValidInput } from '~/infrastructure/ui/shared/helper/is-valid-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

const useCreateMealPageData = () => {
    const {
        CreateMealStore: { mealProducts, resetStore },
        NavigationStore: { navigate, goBack }
    } = useStore();

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

    // TODO : Ajout de la logique d'ajout de repas en base de données
    const onPressValidateModalValidate = () => {
        setIsValidateModalVisible(false);
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
