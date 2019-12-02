// WizardSighup

export const normalizeBirthDate = (value) => {
    const onlyNumsValue = value.map((val) => {
        return val.replace(/[^\d]/g, '');
    });

    const [year, month, day] = onlyNumsValue;

    return [
        !year ? year : year.slice(0, 4),
        !month ? month : month.slice(0, 2),
        !day ? day : day.slice(0, 2)
    ];
};
