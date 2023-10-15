import { useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import { isValidInput } from '~/infrastructure/ui/shared/helper/is-valid-input';
import { InputEnum } from '~/domain/interfaces/enum/input-type-enum';

const useCreateMealPageData = () => {
    const {
        NavigationStore: { goBack }
    } = useStore();

    const [errorMessage, setErrorMessage] = useState(false);
    const [mealTitleInput, setMealTitleInput] = useState('');
    // TODO : Lier cette liste à la vraie donnée
    const [productsList, setProductsList] = useState([
        {
            id: '1',
            name: 'Boisson gazéfiée',
            brand: 'Coca Zéro',
            score: 82,
            image: 'https://images.openfoodfacts.org/images/products/544/900/021/4911/front_fr.200.400.jpg',
            data: {
                carbohydrates: 399,
                energyKcal: 6,
                energyKj: 56,
                fat: 2,
                fiber: 45,
                proteins: 90,
                salt: 1,
                saturatedFat: 3,
                sugar: 89
            },
            consumedQuantity: 9,
            style: {}
        },
        {
            id: '1',
            name: 'Boisson gazéfiée',
            brand: 'Coca Zéro',
            score: 82,
            image: 'https://images.openfoodfacts.org/images/products/544/900/021/4911/front_fr.200.400.jpg',
            data: {
                carbohydrates: 399,
                energyKcal: 6,
                energyKj: 56,
                fat: 2,
                fiber: 45,
                proteins: 90,
                salt: 1,
                saturatedFat: 3,
                sugar: 89
            },
            consumedQuantity: 9,
            style: {}
        },
        {
            id: '1',
            name: 'Boisson gazéfiée',
            brand: 'Coca Zéro',
            score: 82,
            image: 'https://images.openfoodfacts.org/images/products/544/900/021/4911/front_fr.200.400.jpg',
            data: {
                carbohydrates: 399,
                energyKcal: 6,
                energyKj: 56,
                fat: 2,
                fiber: 45,
                proteins: 90,
                salt: 1,
                saturatedFat: 3,
                sugar: 89
            },
            consumedQuantity: 9,
            style: {}
        },
        {
            id: '1',
            name: 'Boisson gazéfiée',
            brand: 'Coca Zéro',
            score: 82,
            image: 'https://images.openfoodfacts.org/images/products/544/900/021/4911/front_fr.200.400.jpg',
            data: {
                carbohydrates: 399,
                energyKcal: 6,
                energyKj: 56,
                fat: 2,
                fiber: 45,
                proteins: 90,
                salt: 1,
                saturatedFat: 3,
                sugar: 89
            },
            consumedQuantity: 9,
            style: {}
        },
        {
            id: '1',
            name: 'Boisson gazéfiée',
            brand: 'Coca Zéro',
            score: 82,
            image: 'https://images.openfoodfacts.org/images/products/544/900/021/4911/front_fr.200.400.jpg',
            data: {
                carbohydrates: 399,
                energyKcal: 6,
                energyKj: 56,
                fat: 2,
                fiber: 45,
                proteins: 90,
                salt: 1,
                saturatedFat: 3,
                sugar: 89
            },
            consumedQuantity: 9,
            style: {}
        }
    ]);

    // TODO : Ajout de la page de scan
    const onPressScanProduct = () => {};

    // TODO : Ajout de la logique pour ajouter un repas en base de données et ajouter la modale
    const onPressValidateButton = () => {
        if (isValidInput(mealTitleInput, InputEnum.Title) && productsList.length > 0) {
            goBack();
        } else {
            setErrorMessage(true);
        }
    };

    return {
        errorMessage,
        goBack,
        mealTitleInput,
        setMealTitleInput,
        onPressScanProduct,
        onPressValidateButton,
        productsList
    };
};

export default useCreateMealPageData;
