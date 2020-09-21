import React from 'react';
import useFormState from './hooks/useFormState';

export default function SimpleFormInputHooks() {
  const [email, updateEmail, resetEmail] = useFormState('');
  const [password, updatePassword, resetPassword] = useFormState('');
  return (
    <div>
      <h1>The email is... {email}</h1>
      <input type="text" value={email} onChange={updateEmail} />
      <button onClick={resetEmail}>Reset Email</button>
      <h1>The password is... {password} (not secure 😂)</h1>
      <input type="text" value={password} onChange={updatePassword} />
      <button onClick={resetPassword}>Reset Password</button>
    </div>
  );
}
