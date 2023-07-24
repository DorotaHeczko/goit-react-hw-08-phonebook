import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filtersSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = e => dispatch(filterContact(e.target.value));

  return (
    <>
      <h3>Find contact by name</h3>
      <input className={css.formInput} onChange={handleInputChange} />
    </>
  );
};
