const useAddWidgetModalData = () => {
    const chosenWidgetAsset = require('~/domain/entities/assets/widget/chosen-widget.svg');
    const energyWidgetAsset = require('~/domain/entities/assets/widget/widget-calories.svg');
    const ecoscoreWidgetAsset = require('~/domain/entities/assets/widget/widget-eco-score.svg');
    const smallMultipleWidgetAsset = require('~/domain/entities/assets/widget/widget-mes-apports-multiple.svg');
    const smallSingleWidgetAsset = require('~/domain/entities/assets/widget/widget-mes-apports-simple.svg');

    return {
        chosenWidgetAsset,
        energyWidgetAsset,
        ecoscoreWidgetAsset,
        smallMultipleWidgetAsset,
        smallSingleWidgetAsset
    };
};

export default useAddWidgetModalData;
