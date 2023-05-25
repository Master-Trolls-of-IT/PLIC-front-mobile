const getAgeFromBirthdate = (birthdate: string): number => {
    const currentYear = new Date().getFullYear();
    const userBirthdateYear = parseInt(birthdate.substring(6));

    return currentYear - userBirthdateYear;
};

const getRightSportivenessFactor = (sportiveness: number): number => {
    switch (true) {
        case sportiveness == 0:
            return 1.2;
        case sportiveness <= 3:
            return 1.375;
        case sportiveness <= 5:
            return 1.55;
        case sportiveness <= 7:
            return 1.725;
        default:
            return 1.9;
    }
};

const GetBasalMetabolism = (
    gender: number,
    weight: number,
    height: number,
    birthdate: string,
    sportiveness: number
) => {
    const userAge = getAgeFromBirthdate(birthdate);

    const maleCalcul = 13.7516 * weight + 500.33 * (height / 100) - 6.755 * userAge + 66.479;
    const femaleCalcul = 9.74 * weight + 184.96 * (height / 100) - 4.6756 * userAge + 655.0955;

    if (gender == 0) {
        return Math.round(maleCalcul * getRightSportivenessFactor(sportiveness));
    } else {
        return Math.round(femaleCalcul * getRightSportivenessFactor(sportiveness));
    }
};

export default GetBasalMetabolism;
