import { useCallback, useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import useEffectOnce from '~/infrastructure/ui/shared/helper/useEffectOnce';
import { useStore } from '~/infrastructure/controllers/store';
import { NavigateProps } from '~/domain/interfaces/props/navigate-props';
import useStartUpPageService from '~/application/page-service/startup-page-service';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import StartupPageStyle from '~/infrastructure/ui/pages/startup-page/startup-page-style';

const useStartupPageData = (componentNavigate: NavigateProps) => {
    const {
        NavigationStore: { setNavigate, setActiveScreen, setPreviousScreen }
    } = useStore();
    const { APIPing } = useStartUpPageService();

    const slideAnimTop = useRef(new Animated.Value(-150)).current;
    const slideAnimBottom = useRef(new Animated.Value(150)).current;
    const [isErrorOnAPI, setIsErrorOnAPI] = useState(false);

    const startupPageLifecycle = useCallback(async () => {
        const slideInTop = () => {
            Animated.timing(slideAnimTop, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }).start();
        };

        const slideOutTop = () => {
            Animated.timing(slideAnimTop, {
                toValue: -150,
                duration: 1500,
                useNativeDriver: true
            }).start();
        };

        const slideInBottom = () => {
            Animated.timing(slideAnimBottom, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }).start();
        };

        const slideOutBottom = () => {
            Animated.timing(slideAnimBottom, {
                toValue: 150,
                duration: 1500,
                useNativeDriver: true
            }).start();
        };

        slideInTop();
        slideInBottom();
        setTimeout(
            async () =>
                APIPing()
                    .then((isApiOnline) => {
                        if (isApiOnline) {
                            slideOutTop();
                            slideOutBottom();
                            setTimeout(() => {
                                setActiveScreen(PagesEnum.LoginPage);
                                setPreviousScreen(PagesEnum.StartUpPage);
                                componentNavigate(PagesEnum.LoginPage);
                            }, 750);
                        } else {
                            setIsErrorOnAPI(true);
                        }
                    })
                    .catch(() => {
                        setIsErrorOnAPI(true);
                    }),
            1500
        );
    }, [APIPing, componentNavigate, setActiveScreen, setPreviousScreen, slideAnimBottom, slideAnimTop]);

    useEffectOnce(() => {
        void startupPageLifecycle();
    });

    useEffect(() => {
        setNavigate(componentNavigate);
    }, [componentNavigate, setNavigate]);

    const modalButtonStyle = {
        container: StartupPageStyle.modalButton,
        text: StartupPageStyle.modalTextButton
    };

    return {
        slideAnimTop,
        slideAnimBottom,
        isErrorOnAPI,
        modalButtonStyle
    };
};

export default useStartupPageData;
