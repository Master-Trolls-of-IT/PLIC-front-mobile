import { useEffect, useMemo, useState } from 'react';
import { useStore } from '~/infrastructure/controllers/store';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';
import getBasalMetabolism from '~/infrastructure/ui/shared/helper/get-basal-metabolism';
import usePersonalDataServices from '~/application/page-service/personal-data-service';
import { PagesEnum } from '~/domain/interfaces/enum/pages-enum';

const usePersonalDataPageData = () => {
    const {
        LoginStore: { userData, setUserData },
        NavigationStore: { navigate }
    } = useStore();
    const { updateUserData } = usePersonalDataServices();

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
            userData.Email !== newEmail ||
            userData.Pseudo !== newUsername ||
            userData.Weight !== parseInt(newWeight) ||
            userData.Height !== parseInt(newHeight) ||
            userData.Sportiveness !== parseInt(newSportActivity) ||
            userData.Birthdate !== newBirthDate ||
            userData.Gender !== parseInt(newGender.value),
        [
            newBirthDate,
            newEmail,
            newGender.value,
            newHeight,
            newSportActivity,
            newUsername,
            newWeight,
            userData.Birthdate,
            userData.Email,
            userData.Gender,
            userData.Height,
            userData.Pseudo,
            userData.Sportiveness,
            userData.Weight
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
        userData.Id,
        userData.Rights,
        userData.Username
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
