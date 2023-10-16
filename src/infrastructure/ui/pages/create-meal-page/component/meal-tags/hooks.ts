import { useState } from 'react';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

const useTagComponentData = () => {
    const assetCross = require('~/domain/entities/assets/icon/icon-cross.svg');
    const assetPlus = require('~/domain/entities/assets/icon/icon-plus.svg');

    const [newCrossHeight, newCrossWidth] = [12, 12];
    const [newPlusHeight, newPlusWidth] = [17, 17];
    const [tags, setTags] = useState([
        {
            label: 'Végétarien',
            color: ColorEnum.ClassicDarkGreen
        },
        {
            label: 'Japonais',
            color: ColorEnum.ClassicRedIcon
        }
    ]);

    // TODO : Ajout de la logique de suppression de tag
    const onPressTagCross = () => {};

    // TODO : Ajout de la logiqe d'ajout de tag
    const onPressTagPlus = () => {};

    return {
        assetCross,
        assetPlus,
        newCrossWidth,
        newCrossHeight,
        newPlusHeight,
        newPlusWidth,
        tags,
        onPressTagCross,
        onPressTagPlus
    };
};

export default useTagComponentData;
