import React from 'react';
import GenericInput from '~/infrastructure/ui/shared/component/generic-input/generic-input';
import { GenericInputBirthdateProps } from '~/domain/interfaces/props/generic-input-birthdate-props';
import { InputTypeEnum } from '~/domain/interfaces/enum/input-type-enum';
import useGenericInputBirthdateData from '~/infrastructure/ui/shared/component/generique-input-birthdate/hooks';

const GenericInputBirthdate = ({ title, input, dispatch, style, placeHolder }: GenericInputBirthdateProps) => {
    const { onChange } = useGenericInputBirthdateData(dispatch, input);

    return (
        <GenericInput
            title={title}
            type={InputTypeEnum.Birthdate}
            input={input}
            dispatch={onChange}
            placeHolder={placeHolder}
            style={style}
        />
    );
};

export default GenericInputBirthdate;
