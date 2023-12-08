import { MockedImage } from '~/domain/interfaces/enum/mocked-image';

export const chooseRightImage = (title: string) => {
    switch (title) {
        case MockedImage.CHAKCHOUKA:
            return require('~/domain/entities/assets/mocked/chackchouka.png');
        case MockedImage.SPAGHETTI:
            return require('~/domain/entities/assets/mocked/pasta.jpg');
        case MockedImage.FISH:
            return require('~/domain/entities/assets/mocked/fish.jpeg');
        case MockedImage.RAMEN:
            return require('~/domain/entities/assets/mocked/ramen.jpg');
        default:
            return require('~/domain/entities/assets/mocked/salade.jpg');
    }
};
