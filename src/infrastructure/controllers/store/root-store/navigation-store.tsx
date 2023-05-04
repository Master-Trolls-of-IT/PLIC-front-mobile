import { action, makeAutoObservable, observable } from 'mobx';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import { NavigateProps } from '~/domain/interfaces/props/navigate-props';

class NavigationStore {
    navigate: NavigateProps;
    goBack: () => void;
    activeScreen: PagesEnum;

    constructor() {
        this.activeScreen = PagesEnum.StartUpPage;
        this.navigate = () => {};
        this.goBack = () => {};

        makeAutoObservable(
            this,
            {
                navigate: observable,
                activeScreen: observable,
                goBack: observable,

                setNavigate: action,
                setActiveScreen: action,
                setGoBack: action
            },
            { autoBind: true }
        );
    }

    setNavigate = (navigate: NavigateProps) => {
        this.navigate = (routeName: PagesEnum) => {
            this.setActiveScreen(routeName);
            navigate(routeName);
        };
    };

    setActiveScreen = (activeScreen: PagesEnum) => {
        this.activeScreen = activeScreen;
    };

    setGoBack = (goBack: () => void) => {
        this.goBack = goBack;
    };
}

export default NavigationStore;
