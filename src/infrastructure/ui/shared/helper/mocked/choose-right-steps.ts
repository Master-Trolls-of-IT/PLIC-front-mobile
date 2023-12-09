import { MockedImage } from '~/domain/interfaces/enum/mocked-image';

export const chooseRightIngredients = (title: string, ingredients: string[]) => {
    if (title == MockedImage.CHAKCHOUKA) {
        return [
            '1 boîte de pulpe de tomates 400g environ',
            '3 poivrons',
            '1 oignon',
            "2 gousses d'ail",
            '4 oeufs',
            '1/2 cuillère à café de piment d’Espelette',
            '1 cuillère à café de cumin',
            '1 cuillère à café de paprika',
            '1 cuillère à soupe d’huile d’olive',
            '2 cuillères à soupe de coriandre ciselée',
            'sel',
            'poivre'
        ];
    } else return ingredients;
};
