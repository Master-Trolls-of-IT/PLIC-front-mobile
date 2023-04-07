import { InputTypeEnum } from '~/application/type/enum/input-type-enum';

export type GenericDropDownProps = {
    title: string;
    type: InputTypeEnum;
    placeHolder?: string;
    style?: object;
};
