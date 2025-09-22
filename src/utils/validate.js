export const checkValidData = (email, password, name) => {

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (name !== undefined && (name.trim() === "" || name.length < 3)) {
        return "Name must be at least 3 characters long.";
    }

    if (!isEmailValid) {
        return "Invalid email format.";
    }
    if (!isPasswordValid) {
        return "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
    }

    return null;
}