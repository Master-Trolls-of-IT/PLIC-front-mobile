import React, { Dispatch, SetStateAction, useState } from 'react';
import { Dimensions } from 'react-native';
import { InputTypeEnum } from '~/domain/interfaces/enum/input-type-enum';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import {
    birthdateTooltipMessage,
    emailTooltipMessage,
    nameTooltipMessage,
    passwordTooltipMessage
} from '~/domain/interfaces/constant/tooltip-constant';
import GenericInputStyle from '~/infrastructure/ui/shared/component/inputs/generic-input/generic-input-style';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import { isNumber } from '~/infrastructure/ui/shared/helper/is-number';
import { isValidInput } from '~/infrastructure/ui/shared/helper/is-valid-input';

const useInputData = ({
    type,
    dispatch
}: {
    type: InputTypeEnum;
    dispatch: Dispatch<SetStateAction<string>> | ((value: string) => void);
}) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(type == InputTypeEnum.Password);
    const [validInput, setValidInput] = useState(false);
    const [controlledInput, setControlledInput] = useState('');

    const genericInputTitleStyle =
        type != InputTypeEnum.Birthdate
            ? { ...GenericInputStyle.title, ...CustomFontInterBold().text }
            : {
                  ...GenericInputStyle.title,
                  ...CustomFontInterBold().text,
                  letterSpacing: -1 * (Dimensions.get('screen').width / 300)
              };

    const assetShowTextOff = require('~/domain/entities/assets/icon/icon-show-text-off.svg');
    const assetShowTextOn = require('~/domain/entities/assets/icon/icon-show-text-on.svg');
    const showPasswordText = secureTextEntry ? (
        <CustomSvg asset={assetShowTextOff} height={28} width={35} />
    ) : (
        <CustomSvg asset={assetShowTextOn} height={28} width={35} />
    );

    const assetRightInput = require('~/domain/entities/assets/icon/icon-input-valid.svg');
    const assetWrongInput = require('~/domain/entities/assets/icon/icon-input-invalid.svg');
    const showRightStatusIcon = validInput ? (
        <CustomSvg asset={assetRightInput} style={GenericInputStyle.statusIcon} height={22} width={22} />
    ) : (
        <CustomSvg asset={assetWrongInput} style={GenericInputStyle.statusIcon} height={22} width={22} />
    );

    const onPressPasswordIcon = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const onPressStatusIcon = () => {
        setShowTooltip(!showTooltip);
    };

    const selectRightMessage = () => {
        if (type == InputTypeEnum.Email) return emailTooltipMessage;
        else if (type == InputTypeEnum.Password) return passwordTooltipMessage;
        else if (type == InputTypeEnum.Birthdate) return birthdateTooltipMessage;
        else return nameTooltipMessage;
    };

    const onChangeText = (value: string) => {
        if (type == InputTypeEnum.Number) {
            setControlledInput((prev) => {
                if (value === '') return '';
                if (!isNumber(value)) return prev;
                else {
                    dispatch(value);
                    return value;
                }
            });
        } else {
            dispatch(value);
        }
        const isValid = isValidInput(value, type);

        setValidInput(isValid);
        if (isValid) setShowTooltip(false);
    };

    return {
        controlledInput,
        dispatchTooltip: setShowTooltip,
        genericInputTitleStyle,
        onChangeText,
        onPressPasswordIcon,
        onPressStatusIcon,
        selectRightMessage,
        secureTextEntry,
        showPasswordText,
        showRightStatusIcon,
        showTooltip,
        validInput
    };
};

export default useInputData;
