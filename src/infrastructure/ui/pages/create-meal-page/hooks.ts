import { useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import { isValidInput } from '~/infrastructure/ui/shared/helper/is-valid-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

const useCreateMealPageData = () => {
    const {
        CreateMealStore: { mealProducts },
        NavigationStore: { navigate, goBack }
    } = useStore();

    const [errorMessage, setErrorMessage] = useState(false);
    const [isValidateModalVisible, setIsValidateModalVisible] = useState(false);
    const [mealTitleInput, setMealTitleInput] = useState('');
    const [inputBarCode, setInputBarCode] = useState('');

    const onPressCancelModal = () => {
        setIsValidateModalVisible(false);
    };

    // TODO : Ajout de la page de scan
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

    // TODO : Ajout de la logique d'ajout de repas en base de données
    const onPressValidateModalValidate = () => {
        setIsValidateModalVisible(false);
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
        mealProducts
    };
};

export default useCreateMealPageData;
