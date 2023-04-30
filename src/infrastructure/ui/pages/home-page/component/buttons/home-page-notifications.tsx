import CustomSvg from '~/infrastructure/ui/shared/custom-svg';

const HomePageNotificationButton = () => {
    const asset = require('~/domain/entities/assets/home-page/home-page-notifications.svg');
    return <CustomSvg asset={asset} height={40} width={40}></CustomSvg>;
};

export default HomePageNotificationButton;
