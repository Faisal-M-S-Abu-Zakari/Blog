// Password strength utils
export const getPasswordStrengthText = (passwordStrength: number) => {
  if (passwordStrength <= 25) return "Weak";
  if (passwordStrength <= 50) return "Fair";
  if (passwordStrength <= 75) return "Good";
  return "Strong";
};

export const getPasswordStrengthColor = (passwordStrength: number) => {
  if (passwordStrength <= 25) return "red";
  if (passwordStrength <= 50) return "yellow";
  if (passwordStrength <= 75) return "emerald";
  return "green";
};

export const calculatePasswordStrength = (password: string) => {
  if (!password) return 0;
  let strength = 0;
  if (password.length >= 8) strength += 25;
  if (/\d/.test(password)) strength += 25;
  if (/[a-z]/.test(password)) strength += 25;
  if (/[A-Z]/.test(password) || /[^A-Za-z0-9]/.test(password)) strength += 25;
  return strength;
};
