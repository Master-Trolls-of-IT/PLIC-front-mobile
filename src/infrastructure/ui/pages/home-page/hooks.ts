const useHomePageData = () => {
    // TODO : compute ecoScore of the user then store it inside "ecoscore"
    const ecoScore = 82;

    // TODO : retrieve User name and store it inside "username"
    const username = 'Alexandre';

    // TODO : retrieve anecdotes from Database and store it inside "anecdote"
    const anecdote =
        'Un mégot peut polluer jusqu’à 500 litres d’eau. Environ 1000 sont jetés par terre chaque seconde en France.';

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
    return { username, chooseRightDynamicImage, anecdote, ecoScore };
};

export default useHomePageData;
