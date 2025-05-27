const filterByField = (items, field, value) => {
    return items.filter((item) => item[field] === value);
};

export  {filterByField};

const validateLoginForm = ({ email, password }) => {
    const errors = {};

    if (!email) {
        errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "Email is invalid";
    } else if (email.length > 254) {
        errors.email = "Email is too long";
    }

    if (!password) {
        errors.password = "Password is required";
    } else {
        if (password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        } else {
            const hasUpperCase = /[A-Z]/.test(password);
            const hasLowerCase = /[a-z]/.test(password);
            const hasNumber = /\d/.test(password);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

            if (!hasUpperCase) {
                errors.password = "Password must include at least one uppercase letter";
            } else if (!hasLowerCase) {
                errors.password = "Password must include at least one lowercase letter";
            } else if (!hasNumber) {
                errors.password = "Password must include at least one number";
            } else if (!hasSpecialChar) {
                errors.password = "Password must include at least one special character";
            }
        }
    }

    return errors;
};

export {validateLoginForm};