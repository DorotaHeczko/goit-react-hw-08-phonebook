import React from 'react';
import css from './Form.module.css'
import { useDispatch, useSelector } from "react-redux";
import { v4 } from 'uuid';
import { addContact } from 'features/contact/contacts-operations';
import { selectContacts } from 'features/contact/getContact';





const Form = () => {
    const dispatch = useDispatch()
    const [nameContact, setNameContact] = React.useState('')
    const [numberContact, setNumberContact] = React.useState('')
    const contacts = useSelector(selectContacts);
    


    const addContactHandler = () => {
    
    const person = {
        id: v4(),
        name: nameContact,
        number: numberContact,
        }
        
        const isValidate = validateForm();
        if (!isValidate) return;

        const exist = contacts.find(contact => contact.name.toLowerCase().trim() === person.name.toLowerCase().trim());

        if (exist) {
        alert(`${person.name} is already in contacts list`);
        return;
    }
    

        dispatch(addContact(person))
        
        setNameContact('')
        setNumberContact('')
    }
    
    const validateForm = () => {
        
        if (!nameContact || !numberContact) {
            alert('This field empty!');
            return false;
        }

        return true;
    }
    
    
        
        return (
          <form className={css.form}>
            <label className={css.formLabel}>
              <p>Name:</p>
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder="Enter name"
                onChange={(e) => setNameContact(e.target.value)}
                value={nameContact}
                className={css.formInput}
              />
            </label>

            <label className={css.formLabel}>
              <p>Number:</p>
              <input
                type="tel"
                name="number"
                pattern="^\d{3}-\d{3}-\d{3}$"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                placeholder="Enter phone number"
                value={numberContact}
                onChange={(e) => setNumberContact(e.target.value)}
                className={css.formInput}
              />
            </label>

            <button
              onSubmit ={() => addContactHandler()}
              type="submit"
              className={css.btn}
            >
              {" "}
              Add contact
            </button>
          </form>
        );
    }







export default Form;