import { useRef, useState } from 'react';
import { Animated } from 'react-native';
import useStartUpPageService from '~/application/page-service/startup-page-service';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';
import StartupPageStyle from '~/infrastructure/ui/pages/startup-page/startup-page-style';
import { useStore } from '~/infrastructure/controllers/store';

const useStartupPageData = () => {
    const {
        NavigationStore: { navigate }
    } = useStore();
    const { APIPing } = useStartUpPageService();

    const slideAnimTop = useRef(new Animated.Value(-150)).current;
    const slideAnimBottom = useRef(new Animated.Value(150)).current;
    const [isErrorOnAPI, setIsErrorOnAPI] = useState(false);

    const startupPageLifecycle = async () => {
        const slideTop = () => {
            Animated.sequence([
                Animated.timing(slideAnimTop, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true
                }),
                Animated.timing(slideAnimTop, {
                    toValue: -150,
                    duration: 1500,
                    useNativeDriver: true,
                    delay: 100
                })
            ]).start();
        };

        const slideBottom = () => {
            Animated.sequence([
                Animated.timing(slideAnimBottom, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true
                }),
                Animated.timing(slideAnimBottom, {
                    toValue: 150,
                    duration: 1500,
                    useNativeDriver: true,
                    delay: 100
                })
            ]).start(() =>
                APIPing()
                    .then((isApiOnline) => {
                        if (isApiOnline) {
                            navigate(PagesEnum.LoginPage);
                        } else {
                            setIsErrorOnAPI(true);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        setIsErrorOnAPI(true);
                    })
            );
        };

        slideTop();
        slideBottom();
    };

    const modalButtonStyle = {
        container: StartupPageStyle.modalButton,
        text: StartupPageStyle.modalTextButton
    };

    return {
        slideAnimTop,
        slideAnimBottom,
        isErrorOnAPI,
        modalButtonStyle,
        startupPageLifecycle
    };
};

export default useStartupPageData;
