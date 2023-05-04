const useHomePageData = () => {
    // TODO : compute ecoScore of the user then store it inside "ecoscore"
    const ecoscore = 82;

    // TODO : retrieve User name and store it inside "username"
    const username = 'Alexandre';

    // TODO : retrieve anecdotes from Database and store it inside "anecdore"
    const anecdote =
        'Un mégot peut polluer jusqu’à 500 litres d’eau. Environ 1000 sont jetés par terre chaque seconde en France.';

    const chooseRightDynamicImage = () => {
        switch (true) {
            case ecoscore < 5:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-01.svg');
            case ecoscore < 10:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-02.svg');
            case ecoscore < 20:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-03.svg');

            case ecoscore < 30:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-04.svg');

            case ecoscore < 40:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-05.svg');

            case ecoscore < 50:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-06.svg');

            case ecoscore < 60:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-07.svg');

            case ecoscore < 70:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-08.svg');

            case ecoscore < 80:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-09.svg');

            case ecoscore < 90:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-10.svg');

            case ecoscore <= 100:
                return require('~/domain/entities/assets/home-page/home-page-basket-level-11.svg');
        }
    };
    return { username, chooseRightDynamicImage, anecdote, ecoscore };
};

export default useHomePageData;
