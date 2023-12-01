import React from 'react';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';

const RightCircle = () => {
    const asset = require('~/domain/entities/assets/game-page/right-circle.svg');

    const newWidth = 25;
    const newHeight = 25;

    return <CustomSvg asset={asset} height={newHeight} width={newWidth} />;
};

export default RightCircle;
