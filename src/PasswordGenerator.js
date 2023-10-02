import React, { useState } from 'react';

function PasswordGenerator({ includeUppercase, includeLowercase, includeNumbers, includeSymbols, onPasswordGenerate }) {

    const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+{}[]|:;"<>,.?/~';

    let validChars = '';

    if (includeUppercase) validChars += uppercaseChars;
    if (includeLowercase) validChars += lowercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += symbolChars;

    if (!validChars) {
      return 'Please select at least one criteria.';
    }

    // Password length (you can customize this)
    const passwordLength = 10;

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars.charAt(randomIndex);
    }

    setGeneratedPassword(password);
    onPasswordGenerate(password);
  };

  return (
    <div>
      <button onClick={() => generatePassword()}>Generate Password</button>
    </div>
  );
}

export default PasswordGenerator;
