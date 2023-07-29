import React from 'react';
import css from './Filter.module.css'
import { useDispatch } from 'react-redux';
import { searchByName } from 'features/filter/filterSlice';


const Filter = () => {
    const dispatch = useDispatch()

    // const value = useSelector(contactsSelectors.getFilter);
    
    const handleInputChange = (e) => {
      dispatch(searchByName(e.currentTarget.value));
    };
    
   


    return (
      <>
        <h3>Find contact by name</h3>
        <input
          type="text"
          name="filter"
          pattern="^[A-Za-z.'\- ]+$"
          onChange={handleInputChange}
          className={css.formInput}
        />
      </>
    );
}

export default Filter;

