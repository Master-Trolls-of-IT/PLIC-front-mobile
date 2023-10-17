const chooseRightEcoScoreValue = (ecoscore: string | undefined) => {
    switch (ecoscore) {
        case 'a':
            return 90;
        case 'b':
            return 70;
        case 'c':
            return 50;
        case 'd':
            return 30;
        case 'e':
            return 10;
        default:
            return 0;
    }
};

export default chooseRightEcoScoreValue;
