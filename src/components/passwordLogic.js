
const generatePassword = (length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars) => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_+=~`[]{}|:;"\'<>,.?/';
  
    let validChars = '';
  
    if (includeUppercase) {
      validChars += uppercaseChars;
    }
    if (includeLowercase) {
      validChars += lowercaseChars;
    }
    if (includeNumbers) {
      validChars += numberChars;
    }
    if (includeSpecialChars) {
      validChars += specialChars;
    }
  
    if (!validChars) {
      throw new Error('At least one character set must be selected.');
    }
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars[randomIndex];
    }
  
    return password;
  };
  
  export { generatePassword };
  