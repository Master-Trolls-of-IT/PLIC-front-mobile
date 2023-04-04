import React, { Dispatch, SetStateAction, useState } from 'react';
import { InputTypeEnum } from '~/application/type/enum/input-type-enum';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import GenericInputStyle from '~/infrastructure/ui/shared/component/generic-input/generic-input-style';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import isValidateInput from '~/infrastructure/ui/shared/helper/validator';

const useGenericInputData = ({
    type,
    dispatch
}: {
    type: InputTypeEnum;
    dispatch: Dispatch<SetStateAction<string>> | ((value: string) => void);
}) => {
    const [validateInput, setValidateInput] = useState(true);
    const [secureTextEntry, setSecureTextEntry] = useState(type == InputTypeEnum.Password);

    const assetRightInput = require('~/domain/entities/assets/icon/icon-input-valid.svg');
    const assetWrongInput = require('~/domain/entities/assets/icon/icon-input-invalid.svg');
    const showRightStatusIcon = validateInput ? (
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

    const fontStyle = CustomFontInterBold().text;

    const onChangeText = (newInput: string) => {
        dispatch(newInput);
        if (type != InputTypeEnum.Text) setValidateInput(isValidateInput(newInput, type));
    };

    const onPressPasswordIcon = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    return {
        fontStyle,
        onChangeText,
        onPressPasswordIcon,
        secureTextEntry,
        showPasswordText,
        showRightStatusIcon
    };
};

export default useGenericInputData;
