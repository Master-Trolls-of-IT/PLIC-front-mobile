import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

const isContentGroup = (routeName: PagesEnum) => {
    switch (routeName) {
        case PagesEnum.StartUpPage:
        case PagesEnum.LoginPage:
        case PagesEnum.SignUpPage:
        case PagesEnum.SettingsPage:
        case PagesEnum.PersonalDataPage:
        case PagesEnum.WidgetPage:
            return false;
        default:
            return true;
    }
};

export default isContentGroup;
