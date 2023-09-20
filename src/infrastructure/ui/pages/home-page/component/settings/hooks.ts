import { useContext, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { HomePageContext } from '~/infrastructure/ui/pages/home-page/context';
import { useStore } from '~/infrastructure/controllers/store';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import getBasalMetabolism from '~/infrastructure/ui/shared/helper/get-basal-metabolism';

const useHomePageSettingsData = () => {
    const {
        LoginStore: { userData }
    } = useStore();

    const genderOptions = [
        { label: 'Homme', value: '0' },
        { label: 'Femme', value: '1' },
        { label: 'Autre', value: '2' }
    ];

    const [newUsername, setNewUsername] = useState(userData.Pseudo);
    const [newBirthDate, setNewBirthDate] = useState(userData.Birthdate);
    const [newGender, setNewGender] = useState<{ label: string; value: string }>(
        genderOptions.find((elem) => parseInt(elem.value) === userData.Gender) ?? { label: 'Autre', value: '2' }
    );
    const [newHeight, setNewHeight] = useState(userData.Height.toString());
    const [newWeight, setNewWeight] = useState(userData.Weight.toString());
    const [newSportActivity, setNewSportActivity] = useState(userData.Sportiveness.toString());
    const [newEmail, setNewEmail] = useState(userData.Email);
    const [newPassword, setNewPassword] = useState('');

    const { handleCloseSettings: handleCloseSettingsFunction } = useContext(HomePageContext);
    const profileAsset = require('~/domain/entities/assets/home-page/home-page-settings-profile.svg');
    const editAsset = require('~/domain/entities/assets/home-page/home-page-settings-edit.svg');

    const logoutButtonStyle = {
        container: {
            backgroundColor: ColorEnum.ClassicBrown,
            borderRadius: 20,
            width: 180,
            height: 45
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

    let numberOfDrag = 0;
    let fingerDirection: 'haut' | 'bas' = 'haut';
    let beginDragOffset = 0;

    const handleScrollBeginDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const {
            nativeEvent: { contentOffset }
        } = event;
        beginDragOffset = contentOffset.y;
    };

    const handleCloseSettings = () => {
        handleCloseSettingsFunction({
            Id: userData.Id,
            Email: newEmail,
            Pseudo: newUsername,
            Weight: parseInt(newWeight),
            Height: parseInt(newHeight),
            Gender: parseInt(newGender.value),
            Sportiveness: parseInt(newSportActivity),
            Birthdate: newBirthDate,
            Username: userData.Username,
            Rights: userData.Rights,
            BasalMetabolism: getBasalMetabolism(
                parseInt(newGender.value),
                parseInt(newWeight),
                parseInt(newHeight),
                newBirthDate,
                parseInt(newSportActivity)
            ),
            AvatarId: null
        });
    };

    const handleScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const {
            nativeEvent: { contentOffset }
        } = event;
        if (contentOffset.y < beginDragOffset) {
            fingerDirection = 'bas';
        } else if (contentOffset.y > beginDragOffset) {
            fingerDirection = 'haut';
            numberOfDrag = 0;
        }
        if (fingerDirection === 'bas') numberOfDrag = numberOfDrag + 1;
        if (numberOfDrag >= 2) handleCloseSettings();
    };

    const handleScroll = () => {
        numberOfDrag = 0;
    };

    const arrowLinkAsset = require('~/domain/entities/assets/home-page/arrow-link.svg');

    return {
        userData,
        handleCloseSettings,
        profileAsset,
        editAsset,
        inputUsername: { input: newUsername, dispatch: setNewUsername },
        inputBirthDate: { input: newBirthDate, dispatch: setNewBirthDate },
        inputGender: { input: newGender, dispatch: setNewGender },
        inputHeight: { input: newHeight, dispatch: setNewHeight },
        inputWeight: { input: newWeight, dispatch: setNewWeight },
        inputSportivness: { input: newSportActivity, dispatch: setNewSportActivity },
        inputEmail: { input: newEmail, dispatch: setNewEmail },
        inputPassword: { input: newPassword, dispatch: setNewPassword },
        logoutButtonStyle,
        deleteButtonStyle,
        handleScrollBeginDrag,
        handleScrollEndDrag,
        handleScroll,
        arrowLinkAsset
    };
};

export default useHomePageSettingsData;
