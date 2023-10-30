import { useEffect, useMemo, useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import getBasalMetabolism from '~/infrastructure/ui/shared/helper/get-basal-metabolism';
import usePersonalDataServices from '~/application/page-service/personal-data-service';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

const usePersonalDataPageData = () => {
    const {
        UserStore: { userData, setUserData },
        NavigationStore: { navigate }
    } = useStore();
    const { updateUserData } = usePersonalDataServices();

    const genderOptions = [
        { label: 'Homme', value: '0' },
        { label: 'Femme', value: '1' },
        { label: 'Autre', value: '2' }
    ];

    const [newUsername, setNewUsername] = useState(userData.pseudo);
    const [newBirthDate, setNewBirthDate] = useState(userData.birthdate);
    const [newGender, setNewGender] = useState<{ label: string; value: string }>(
        genderOptions.find((elem) => parseInt(elem.value) === userData.gender) ?? { label: 'Autre', value: '2' }
    );
    const [newHeight, setNewHeight] = useState(userData.height.toString());
    const [newWeight, setNewWeight] = useState(userData.weight.toString());
    const [newSportActivity, setNewSportActivity] = useState(userData.sportiveness.toString());
    const [newEmail, setNewEmail] = useState(userData.email);
    const [newPassword, setNewPassword] = useState('');

    const profileAsset = require('~/domain/entities/assets/home-page/home-page-settings-profile.svg');
    const editAsset = require('~/domain/entities/assets/home-page/home-page-settings-edit.svg');

    const cancelButtonStyle = {
        container: {
            backgroundColor: ColorEnum.ClassicBrown,
            borderRadius: 20,
            width: 105,
            height: 45
        },
        text: {
            color: ColorEnum.ClassicBeige,
            fontSize: 18,
            fontWeight: 700
        }
    };

    const confirmButtonStyle = {
        container: {
            backgroundColor: ColorEnum.ClassicGreen,
            borderRadius: 20,
            width: 105,
            height: 45
        },
        text: {
            color: ColorEnum.ClassicGrey,
            fontSize: 18,
            fontWeight: 700
        }
    };

    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isFailModalOpen, setIsFailModalOpen] = useState(false);

    const handleCloseSuccessModal = (value: boolean) => {
        setIsSuccessModalOpen(value);
        navigate(PagesEnum.SettingsPage);
    };

    const [confirmChanges, setConfirmChanges] = useState(false);
    const [isChangesModalOpen, setIsChangesModalOpen] = useState(false);

    const handleDoubleCheckConfirm = () => {
        setConfirmChanges(true);
        setIsConfirmModalOpen(true);
    };

    const handleDoubleCheckCancel = () => {
        setConfirmChanges(true);
        setIsConfirmModalOpen(false);
    };

    const isUserDataChanges = useMemo(
        () =>
            userData.email !== newEmail ||
            userData.pseudo !== newUsername ||
            userData.weight !== parseInt(newWeight) ||
            userData.height !== parseInt(newHeight) ||
            userData.sportiveness !== parseInt(newSportActivity) ||
            userData.birthdate !== newBirthDate ||
            userData.gender !== parseInt(newGender.value),
        [
            newBirthDate,
            newEmail,
            newGender.value,
            newHeight,
            newSportActivity,
            newUsername,
            newWeight,
            userData.birthdate,
            userData.email,
            userData.gender,
            userData.height,
            userData.pseudo,
            userData.sportiveness,
            userData.weight
        ]
    );

    const handleConfirmButton = () => {
        if (isUserDataChanges) {
            setIsConfirmModalOpen(true);
        } else {
            setIsChangesModalOpen(true);
        }
    };

    const handleCancelButton = () => {
        navigate(PagesEnum.SettingsPage);
    };

    useEffect(() => {
        if (confirmChanges) {
            const newDatas = {
                id: userData.id,
                email: newEmail,
                pseudo: newUsername,
                weight: parseInt(newWeight),
                height: parseInt(newHeight),
                gender: parseInt(newGender.value),
                sportiveness: parseInt(newSportActivity),
                birthdate: newBirthDate,
                username: userData.username,
                rights: userData.rights,
                basalMetabolism: getBasalMetabolism(
                    parseInt(newGender.value),
                    parseInt(newWeight),
                    parseInt(newHeight),
                    newBirthDate,
                    parseInt(newSportActivity)
                ),
                avatarId: null
            };

            updateUserData(newDatas)
                .then((response) => {
                    setUserData(response);
                    setIsSuccessModalOpen(true);
                })
                .catch(() => {
                    setIsFailModalOpen(true);
                });
        }
    }, [
        confirmChanges,
        newBirthDate,
        newEmail,
        newGender.value,
        newHeight,
        newSportActivity,
        newUsername,
        newWeight,
        setUserData,
        updateUserData,
        userData.id,
        userData.rights,
        userData.username
    ]);

    return {
        userData,
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
        cancelButtonStyle,
        confirmButtonStyle,
        handleDoubleCheckConfirm,
        handleDoubleCheckCancel,
        isConfirmModalOpen,
        setIsConfirmModalOpen,
        handleConfirmButton,
        isFailModalOpen,
        setIsFailModalOpen,
        isSuccessModalOpen,
        setIsSuccessModalOpen,
        handleCloseSuccessModal,
        isChangesModalOpen,
        setIsChangesModalOpen,
        handleCancelButton
    };
};
export default usePersonalDataPageData;
