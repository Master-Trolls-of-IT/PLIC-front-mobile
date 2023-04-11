import React, { Dispatch, SetStateAction, useState } from 'react';

const useGenericBirthdateData = (dispatchInput: Dispatch<SetStateAction<string>> | ((value: string) => void)) => {
    const onChange = (value: string) => {
        console.log(value);
        if (value.length > 10) return;
        const valueWithoutSlash = value.replace('/', '');
        let formattedValue = '';
        if (valueWithoutSlash.length < 3) {
            formattedValue = valueWithoutSlash;
        } else if (valueWithoutSlash.length < 5) {
            console.log('hello', valueWithoutSlash[3] ?? '');
            formattedValue =
                valueWithoutSlash[0] + valueWithoutSlash[1] + '/' + valueWithoutSlash[2] + valueWithoutSlash[3] ?? '';
        } else {
            formattedValue =
                valueWithoutSlash[0] +
                    valueWithoutSlash[1] +
                    '/' +
                    valueWithoutSlash[2] +
                    valueWithoutSlash[3] +
                    '/' +
                    valueWithoutSlash[4] +
                    valueWithoutSlash[5] ??
                '' + valueWithoutSlash[6] ??
                '' + valueWithoutSlash[7] ??
                '';
        }
        dispatchInput(formattedValue);
    };

    return {
        onChange
    };
};

export default useGenericBirthdateData;
