import React, { useState } from 'react';
import { generatePassword } from './passwordLogic';
import styles from './Password.css';

const PasswordGenerator = () => {
  
    const [passwordLength, setPasswordLength] = useState(8);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
    const [generatedPassword, setGeneratedPassword] = useState('');
  
    const handleGeneratePassword = () => {
      const newPassword = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars);
      setGeneratedPassword(newPassword);
    };

    const copyToClipboard = () => {
      navigator.clipboard.writeText(generatedPassword);
      alert("Copied to clipboard: " + generatedPassword);
  };
  
    return (
    <div className='cont'>
      <div className='main'>
        <label>Enter Your Password Length (8-14):</label>
        <input
          type="number"
          value={passwordLength}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (value >= 8 && value <= 14) {
              setPasswordLength(value);
            }
          }}
        />
        <br />
        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
          Include Uppercase Letters
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
          />
          Include Lowercase Letters
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Include Numbers
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={(e) => setIncludeSpecialChars(e.target.checked)}
          />
          Include Special Characters
        </label>
        <br />
        <div className='pass'>
                    <button onClick={handleGeneratePassword} type="button" className="btn btn-primary">Generate Password</button>
                    {/* copy to clipbborad additional feature added  with @pruthviraj3196*/}
                    {generatedPassword && (
                        <button onClick={copyToClipboard} type="button" className="btn btn-secondary">Copy to Clipboard</button>
                    )}
                    <p className='generatedPass'>{generatedPassword}</p>
                </div>
      </div>
      </div>
    );
  };

export default PasswordGenerator;