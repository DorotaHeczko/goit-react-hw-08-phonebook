import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations  from '../../features/auth/auth-operations';
import css from './Login.module.css'





export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.loginBox}>
      <div className={css.loginContainer}>
        <h1 className={css.title}>Login page</h1>

        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
          <label className={css.formLabel}>
            Email
            <input
              className={css.formInput}
              type="email"
              name="email"
              
              value={email}
              onChange={handleChange}
            />
          </label>

          <label className={css.formLabel}>
            Password
            <input
              className={css.formInput}
              type="password"
              name="password"
              
              value={password}
              onChange={handleChange}
            />
          </label>

          <button className={css.btn} type="submit">
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}