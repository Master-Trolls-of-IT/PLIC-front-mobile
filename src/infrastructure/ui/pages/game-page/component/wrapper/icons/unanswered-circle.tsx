import React from 'react';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';

const UnansweredCircle = () => {
    const asset = require('~/domain/entities/assets/game-page/tbd-circle.svg');

    const newWidth = 25;
    const newHeight = 25;

    return <CustomSvg asset={asset} height={newHeight} width={newWidth} />;
};

export default UnansweredCircle;
