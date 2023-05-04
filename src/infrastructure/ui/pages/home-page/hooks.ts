const useHomePageData = () => {
    //TODO : compute ecoScore of the user then store it inside "ecoscore"
    const ecoscore = 43;

    //TODO : retrieve User name and store it inside "username"
    const username = 'Alexandre';

    //TODO : retrieve anecdotes from Database and store it inside "anecdore"
    const anecdote =
        'Un mégot peut polluer jusqu’à 500 litres d’eau. Environ 1000 sont jetés par terre chaque seconde en France.';

    let basketAsset;
    switch (true) {
        case ecoscore < 5:
            basketAsset = require('~/domain/entities/assets/home-page/home-page-basket-level-01.svg');
            break;
        case ecoscore < 10:
            basketAsset = require('~/domain/entities/assets/home-page/home-page-basket-level-02.svg');
            break;
        case ecoscore < 20:
            basketAsset = require('~/domain/entities/assets/home-page/home-page-basket-level-03.svg');
            break;
        case ecoscore < 30:
            basketAsset = require('~/domain/entities/assets/home-page/home-page-basket-level-04.svg');
            break;
        case ecoscore < 40:
            basketAsset = require('~/domain/entities/assets/home-page/home-page-basket-level-05.svg');
            break;
        case ecoscore < 50:
            basketAsset = require('~/domain/entities/assets/home-page/home-page-basket-level-06.svg');
            break;
        case ecoscore < 60:
            basketAsset = require('~/domain/entities/assets/home-page/home-page-basket-level-07.svg');
            break;
        case ecoscore < 70:
            basketAsset = require('~/domain/entities/assets/home-page/home-page-basket-level-08.svg');
            break;
        case ecoscore < 80:
            basketAsset = require('~/domain/entities/assets/home-page/home-page-basket-level-09.svg');
            break;
        case ecoscore < 90:
            basketAsset = require('~/domain/entities/assets/home-page/home-page-basket-level-10.svg');
            break;
        case ecoscore < 100:
            basketAsset = require('~/domain/entities/assets/home-page/home-page-basket-level-11.svg');
            break;
    }

    return { username, basketAsset, anecdote, ecoscore };
};

export default useHomePageData;
