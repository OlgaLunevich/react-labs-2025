const filterByField = (items, field, value) => {
    return items.filter((item) => item[field] === value);
};

export default filterByField;