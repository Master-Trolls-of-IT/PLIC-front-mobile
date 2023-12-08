import { MockedImage } from '~/domain/interfaces/enum/mocked-image';

export const chooseRightRating = (title: string) => {
    switch (title) {
        case MockedImage.CHAKCHOUKA:
            return '4,8';
        case MockedImage.SPAGHETTI:
            return '4,3';
        case MockedImage.FISH:
            return '4,2';
        case MockedImage.RAMEN:
            return '3,9';
        default:
            return '3,4';
    }
};
