// General
export const formatUserInfo = (values) => {
    const {
        confirmPassword:   deletedKey, // eslint-disable-line no-unused-vars
        how_hear_about_us: howHearAboutUs,
        date_of_birth:     birthDate,
        ...otherValues
    } = values;

    const formattedBirthDate = birthDate.map((val, i) => {
        return i === 1 ? `${Number(val) - 1}` : val;
    });

    const data = {
        ...otherValues,
        'date_of_birth':     new Date(...formattedBirthDate).getTime(),
        'how_hear_about_us': howHearAboutUs ? howHearAboutUs.value : null,
    };

    return data;
};

// Validation
export const isBirthDateEmpty = (value) => {
    const isProvided = Boolean(value);

    if (isProvided) {
        return value.every((el) => {
            return el === '';
        });
    }

    return !isProvided;
};

export const isBirthDateValid = (value) => {
    const [year, month, day] = value.map((el) => {
        return Number(el);
    });

    return !value.includes('')
    && (year > 0 && year <= new Date().getFullYear())
    && (month > 0 && month <= 12)
    && (day > 0 && day <= new Date(year, month, 0).getDate());
};

export const isAdult = (value) => {
    const values = value.map((val, i) => {
        if (i === 1) {
            return Number(val) - 1;
        }

        return Number(val);
    });

    const today = new Date();
    const birthDate = new Date(...values);

    let age = today.getFullYear() - birthDate.getFullYear();

    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age -= 1;
    }

    return age >= 18;
};
