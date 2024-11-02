import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './ValidatedInput.css';

export function ValidatedInput() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('A password is required');
  return (
    <div>
      <label>Password</label>
      <div className="wrapper">
        <input
          id="myInput"
          type="password"
          value={password}
          onChange={(e) => {
            const fullPassword = e.target.value;
            setPassword(fullPassword);

            if (fullPassword.length < 1) {
              setMessage('A password is required.');
            } else if (fullPassword.length < 8) {
              setMessage('Your password is too short.');
            } else {
              setMessage(``);
              <FaCheck className="fa-check" />;
            }
          }}
        />
        <div className="text-red-700">
          {password.length >= 8 ? (
            <FaCheck className="fa-check" />
          ) : (
            <FaTimes className="fa-times" />
          )}
        </div>
      </div>
      <div className="error-message">{message}</div>
    </div>
  );
}
