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
    && year <= new Date().getFullYear()
    && month <= 12
    && day <= new Date(year, month, 0).getDate();
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
