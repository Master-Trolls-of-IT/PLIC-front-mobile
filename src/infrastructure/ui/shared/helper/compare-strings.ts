export const compareStrings = (firstString: string, secondString: string) => {
    const newFirstString = firstString
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .toLowerCase();

    const newSecondString = secondString
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .toLowerCase();

    return newFirstString.includes(newSecondString);
};
