import { useCallback } from 'react';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import { useStore } from '~/infrastructure/controllers/store';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

const useSettingsPageData = () => {
    const {
        NavigationStore: { navigate }
    } = useStore();
    const logoutButtonStyle = {
        container: {
            backgroundColor: ColorEnum.ClassicBrown,
            borderRadius: 20,
            width: 180,
            height: 45,
            marginTop: 25
        },
        text: {
            color: ColorEnum.ClassicBeige,
            fontSize: 18,
            fontWeight: 700
        }
    };

    const deleteButtonStyle = {
        container: {
            backgroundColor: ColorEnum.ClassicRedIcon,
            borderRadius: 20,
            width: 220,
            height: 45
        },
        text: {
            color: ColorEnum.ClassicGrey,
            fontSize: 18,
            fontWeight: 700
        }
    };

    const arrowLinkAsset = require('~/domain/entities/assets/home-page/arrow-link.svg');

    const navigateToPersonalDataPage = useCallback(() => {
        navigate(PagesEnum.PersonalDataPage);
    }, [navigate]);

    const navigateToWidgetPage = useCallback(() => {
        navigate(PagesEnum.WidgetPage);
    }, [navigate]);

    return {
        logoutButtonStyle,
        deleteButtonStyle,
        arrowLinkAsset,
        navigateToPersonalDataPage,
        navigateToWidgetPage
    };
};

export default useSettingsPageData;
