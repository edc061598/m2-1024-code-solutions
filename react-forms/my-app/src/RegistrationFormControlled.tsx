import { ChangeEvent, useState } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(username);
    console.log(password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            name="username"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
        </label>
      </div>

      <div>
        <label>
          Password:
          <input
            name="password"
            type="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </label>
      </div>

      <button>Submit Form</button>
    </form>
  );
}
