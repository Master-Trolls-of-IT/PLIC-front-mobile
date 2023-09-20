import { useCallback, useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { useStore } from '~/infrastructure/controllers/store';
import GetDailyNutrientsGoal from '~/infrastructure/ui/shared/helper/get-daily-nutrients-goal';
import { DailyNutrientsType } from '~/domain/interfaces/services/daily-nutrients-type';
import { anecdotesObject } from '~/domain/entities/constants/anecdote-constants';
import getRandomNumberInArrayLength from '~/infrastructure/ui/shared/helper/get-random-number-in-array-length';
import { UserData } from '~/domain/interfaces/services/user-data';
import useHomePageServices from '~/application/page-service/home-page-service';

const useHomePageData = () => {
    const {
        LoginStore: { userData, setUserData }
    } = useStore();

    const { updateUserData } = useHomePageServices();

    // TODO : calculate eco-score from daily products eaten
    const ecoScore = 82;

    const username = userData.Pseudo;

    // TODO : retrieve the right nutrients earned from daily products eaten for all nutrients type
    const dailyNutrientsGoal = GetDailyNutrientsGoal(userData.BasalMetabolism);
    const dailyNutrientsEarned = {
        energy: Math.round(userData.BasalMetabolism * 0.82),
        protein: Math.round(dailyNutrientsGoal.protein * 0.6),
        carbohydrate: Math.round(dailyNutrientsGoal.carbohydrate * 0.4),
        lipid: Math.round(dailyNutrientsGoal.lipid * 0.8)
    } as DailyNutrientsType;

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

    const anecdoteObject = anecdotesObject[getRandomNumberInArrayLength(anecdotesObject.length)];

    const slideAnimBottom = useRef(new Animated.Value(1000)).current;

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const [isSettingsLoading, setIsSettingsLoading] = useState(false);

    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    const [confirmChanges, setConfirmChanges] = useState(false);

    const handleOpenSettings = useCallback(() => {
        setIsSettingsLoading(true);
        setIsSettingsOpen(true);

        const slideFromBottom = () => {
            Animated.sequence([
                Animated.timing(slideAnimBottom, {
                    toValue: 0,
                    duration: 1200,
                    delay: 1500,
                    useNativeDriver: true
                })
            ]).start();
        };

        slideFromBottom();
        setTimeout(() => {
            setIsSettingsLoading(false);
        }, 1600);
    }, [slideAnimBottom]);

    const [newUserDatas, setNewUserDatas] = useState(userData);

    const handleCloseSettings = useCallback(
        (newUserData: UserData) => {
            if (
                newUserData.Pseudo !== userData.Pseudo ||
                newUserData.BasalMetabolism !== userData.BasalMetabolism ||
                newUserData.Email !== userData.Email ||
                newUserData.Birthdate !== userData.Birthdate
            ) {
                setIsConfirmModalOpen(true);
                setNewUserDatas(newUserData);
            } else {
                const slideToBottom = () => {
                    Animated.sequence([
                        Animated.timing(slideAnimBottom, {
                            toValue: 1000,
                            duration: 600,
                            useNativeDriver: true
                        })
                    ]).start();
                };

                slideToBottom();
                setTimeout(() => {
                    setIsSettingsOpen(false);
                }, 600);
            }
        },
        [setIsConfirmModalOpen]
    );

    useEffect(() => {
        if (confirmChanges) {
            setConfirmChanges(false);
            const update = async () => {
                const newUserData = await updateUserData(newUserDatas);

                setUserData(newUserData !== undefined ? newUserData : userData);
            };
            void update();
        }
        const slideToBottom = () => {
            Animated.sequence([
                Animated.timing(slideAnimBottom, {
                    toValue: 1000,
                    duration: 600,
                    useNativeDriver: true
                })
            ]).start();
        };

        slideToBottom();
        setTimeout(() => {
            setIsSettingsOpen(false);
        }, 600);
    }, [confirmChanges, slideAnimBottom]);

    return {
        anecdoteObject,
        dailyNutrientsGoal,
        dailyNutrientsEarned,
        username,
        chooseRightDynamicImage,
        ecoScore,
        isSettingsOpen,
        handleOpenSettings,
        handleCloseSettings,
        slideAnimBottom,
        isSettingsLoading,
        isConfirmModalOpen,
        setIsConfirmModalOpen,
        setConfirmChanges
    };
};

export default useHomePageData;
