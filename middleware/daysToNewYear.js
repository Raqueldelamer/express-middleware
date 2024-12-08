const daysToNewYear = (req, res, next) => {
    const dateToday = new Date();
    const newYear = new Date('January 1, 2025 00:00:00');
    const millisecondsToNewYear = newYear - dateToday;
    console.log("Days to New Year 2025: " + millisecondsToNewYear / 60 / 60/ 24 / 1000);
    req.daysToNewYear = (millisecondsToNewYear / 60 / 60 / 24 / 1000);
    next();
}

export { daysToNewYear };