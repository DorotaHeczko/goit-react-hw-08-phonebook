import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../features/auth/auth-operations';
import { NavLink } from "react-router-dom";
import css from './Register.module.css'



export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(operations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

return (
  <div className={css.loginBox}>
    <div className={css.loginContainer}>
      <h1 className={css.title}>Registration</h1>

      <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
        <label className={css.formLabel}>
          Username
          <input
            className={css.formInput}
            type="text"
            name="name"
            pattern="^[A-Za-z.'\- ]+$"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={css.formLabel}>
          Email
          <input
            className={css.formInput}
            type="email"
            name="email"
            pattern="^[A-Za-z.'\- ]+$"
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
            pattern="^[A-Za-z.'\- ]+$"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={css.btn} type="submit">
          Register
        </button>
        <p>
          Already registered?{" "}
          <NavLink to={"/login"} className={css.txtLink}>
            Sign in
          </NavLink>
        </p>
      </form>
    </div>
  </div>
);
}