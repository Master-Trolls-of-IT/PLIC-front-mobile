import CustomSvg from '~/infrastructure/ui/shared/custom-svg';

const HomePageSettingsButton = () => {
    const asset = require('~/domain/entities/assets/home-page/home-page-settings.svg');
    return <CustomSvg asset={asset} height={40} width={40}></CustomSvg>;
};

export default HomePageSettingsButton;
