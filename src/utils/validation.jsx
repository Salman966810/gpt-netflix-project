export const validation = (email, password) => {
  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

  if (!emailRegEx.test(email)) {
    return "Invalid email format.";
  }

  if (!passwordRegEx.test(password)) {
    return "Password must be at least 8 characters long and include at least one letter and one number.";
  }

  return null;
};
