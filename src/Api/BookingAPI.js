export const seededRandom = function (seed) {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;

    return function () {
        return (s = s * a % m) / m;
    };

};

export const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());
    for (let hour = 12; hour < 15; hour++) {
        if (random() < 0.5) {
            result.push(`${hour}:00`);
        }

        if (random() < 0.5) {
            result.push(`${hour}:30`);
        }

    }


    if (random() < 0.5) {
        result.push("15:00");
    }

    for (let hour = 17; hour < 22; hour++) {

        if (random() < 0.5) {
            result.push(`${hour}:00`);
        }

        if (random() < 0.5) {
            result.push(`${hour}:30`);
        }

    }

    if (random() < 0.5) {
        result.push("22:00");
    }

    return result;

};

export const submitAPI = function (formData) {
   return true;
};