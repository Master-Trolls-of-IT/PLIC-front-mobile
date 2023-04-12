import React, { Dispatch, SetStateAction, useState } from 'react';

const useGenericBirthdateData = (
    dispatchInput: Dispatch<SetStateAction<string>> | ((value: string) => void),
    input: string
) => {
    const verifyDateFormat = (value: string) => {
        for (let i = 0; i < value.length; i++) {
            switch (i) {
                case 0:
                    if (isNaN(parseInt(value[i]))) return false;
                    if (parseInt(value[i]) > 3) return false;
                    break;
                case 1:
                    if (isNaN(parseInt(value[i]))) return false;
                    if (parseInt(value[i]) > 9) return false;
                    break;
                case 3:
                    if (isNaN(parseInt(value[i]))) return false;
                    if (parseInt(value[i]) > 1) return false;
                    break;
                case 4:
                    if (isNaN(parseInt(value[i]))) return false;
                    if (parseInt(value[i - 1]) == 0) {
                        if (parseInt(value[i]) > 9) return false;
                    }
                    if (parseInt(value[i - 1]) == 1) {
                        if (parseInt(value[i]) > 3) return false;
                    }
                    break;
                default:
            }
        }
        return true;
    };
    const onChange = (value: string) => {
        if (value.length > 10) return;
        const valueWithoutSlash = value.replaceAll('/', '');
        let formattedValue = '';
        if (valueWithoutSlash.length < 3) {
            formattedValue = valueWithoutSlash;
        } else if (valueWithoutSlash.length < 5) {
            formattedValue =
                valueWithoutSlash[0] + valueWithoutSlash[1] + '/' + valueWithoutSlash[2] + (valueWithoutSlash[3] ?? '');
        } else {
            formattedValue =
                valueWithoutSlash[0] +
                valueWithoutSlash[1] +
                '/' +
                valueWithoutSlash[2] +
                valueWithoutSlash[3] +
                '/' +
                valueWithoutSlash[4] +
                (valueWithoutSlash[5] ?? '') +
                (valueWithoutSlash[6] ?? '') +
                (valueWithoutSlash[7] ?? '');
        }
        dispatchInput(verifyDateFormat(formattedValue) ? formattedValue : input);
    };

    return {
        onChange
    };
};

export default useGenericBirthdateData;
