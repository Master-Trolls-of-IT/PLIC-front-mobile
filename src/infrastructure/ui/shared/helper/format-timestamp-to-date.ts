const formatTimestampToDate = (timestamp: string) => {
    const groups = /^(?<years>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/gm.exec(timestamp)?.groups;

    return groups ? `${groups.day}/${groups.month}/${groups.years}` : '01/01/1999';
};

export default formatTimestampToDate;
