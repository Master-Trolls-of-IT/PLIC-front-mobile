import React, { Dispatch, SetStateAction, useState } from 'react';
import { InputTypeEnum } from '~/application/type/enum/input-type-enum';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import GenericInputStyle from '~/infrastructure/ui/shared/component/generic-input/generic-input-style';
import isValidateInput from '~/infrastructure/ui/shared/helper/validator';
import {
    birthdateTooltipMessage,
    emailTooltipMessage,
    passwordTooltipMessage
} from '~/application/type/constant/tooltip-constant';

const useGenericInputData = ({
    type,
    dispatch
}: {
    type: InputTypeEnum;
    dispatch: Dispatch<SetStateAction<string>> | ((value: string) => void);
}) => {
    const [validInput, setValidInput] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(type == InputTypeEnum.Password);
    const [showTooltip, setShowTooltip] = useState(false);

    const assetRightInput = require('~/domain/entities/assets/icon/icon-input-valid.svg');
    const assetWrongInput = require('~/domain/entities/assets/icon/icon-input-invalid.svg');
    const showRightStatusIcon = validInput ? (
        <CustomSvg asset={assetRightInput} style={GenericInputStyle.statusIcon} height={22} width={22} />
    ) : (
        <CustomSvg asset={assetWrongInput} style={GenericInputStyle.statusIcon} height={22} width={22} />
    );

    const assetShowTextOff = require('~/domain/entities/assets/icon/icon-show-text-off.svg');
    const assetShowTextOn = require('~/domain/entities/assets/icon/icon-show-text-on.svg');
    const showPasswordText = secureTextEntry ? (
        <CustomSvg asset={assetShowTextOff} height={28} width={35} />
    ) : (
        <CustomSvg asset={assetShowTextOn} height={28} width={35} />
    );

    const onChangeText = (newInput: string) => {
        dispatch(newInput);
        const isValid = isValidateInput(newInput, type);

        setValidInput(isValid);
        if (isValid) setShowTooltip(false);
    };

    const onPressPasswordIcon = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const onPressStatusIcon = () => {
        setShowTooltip(!showTooltip);
    };

    const selectRightMessage = () => {
        if (type == InputTypeEnum.Email) return emailTooltipMessage;
        else if (type == InputTypeEnum.Password) return passwordTooltipMessage;
        else return birthdateTooltipMessage;
    };

    return {
        dispatchTooltip: setShowTooltip,
        onChangeText,
        onPressPasswordIcon,
        onPressStatusIcon,
        secureTextEntry,
        selectRightMessage,
        showPasswordText,
        showRightStatusIcon,
        showTooltip,
        validInput
    };
};

export default useGenericInputData;
