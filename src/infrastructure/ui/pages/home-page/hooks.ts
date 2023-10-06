import { useStore } from '~/infrastructure/controllers/store';

const useHomePageData = () => {
    const {
        LoginStore: { userData },
        DataStore: { widgetsParams }
    } = useStore();

    // TODO : calculate eco-score from daily products eaten
    const ecoScore = 82;

    const username = userData.Pseudo;

    // TODO : retrieve the right nutrients earned from daily products eaten for all nutrients type
    const chooseRightDynamicImage = () => {
        switch (true) {
            case ecoScore < 5:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-01.svg');
            case ecoScore < 10:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-02.svg');
            case ecoScore < 20:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-03.svg');
            case ecoScore < 30:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-04.svg');
            case ecoScore < 40:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-05.svg');
            case ecoScore < 50:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-06.svg');
            case ecoScore < 60:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-07.svg');
            case ecoScore < 70:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-08.svg');
            case ecoScore < 80:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-09.svg');
            case ecoScore < 90:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-10.svg');
            case ecoScore <= 100:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-11.svg');
        }
    };

    return {
        username,
        chooseRightDynamicImage,
        widgetsParams
    };
};

export default useHomePageData;
