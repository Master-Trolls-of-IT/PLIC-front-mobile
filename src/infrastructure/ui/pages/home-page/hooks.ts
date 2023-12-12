import { useStore } from '~/infrastructure/controllers/store';
import useRenderWidgetField from '~/infrastructure/ui/shared/component/use-render-widget-field';
import HomePageStyle from '~/infrastructure/ui/pages/home-page/home-page-style';

const useHomePageData = () => {
    const {
        UserStore: { userData },
        DataStore: { widgetsParams }
    } = useStore();

    const ecoScore = 82;
    const username = userData.pseudo;

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

    const widgetField = useRenderWidgetField(widgetsParams, HomePageStyle.widgetContainerFirstRow);

    return {
        username,
        chooseRightDynamicImage,
        widgetsParams,
        widgetField
    };
};

export default useHomePageData;
