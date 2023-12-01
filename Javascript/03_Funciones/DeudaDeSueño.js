const getSleepHours = (day) => {
    switch (day) {
        case "monday":
            return 8;
        case "tuesday":
            return 7;
        case "wednesday":
            return 9;
        case "thursday":
            return 7;
        case "friday":
            return 8;
        case "saturday":
            return 8;
        case "sunday":
            return 10;
        default:
            return `No se encuentra ese día, ¡error!`;
    }
};


const getActualSleepHours = () =>
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");

console.log(getSleepHours("monday"))
console.log(getActualSleepHours())


const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log("Tienes las horas perfectas de sueño!")
    } else if (actualSleepHours > idealSleepHours) {
        console.log("Tienes más horas de sueño que lo ideal que son " + (idealSleepHours))

    } else if (actualSleepHours < idealSleepHours) {
        console.log("Necesitas mas horas de sueño al menos " + (idealSleepHours - actualSleepHours))

    } else {
        console.log("Error!")
    }
}

calculateSleepDebt()










