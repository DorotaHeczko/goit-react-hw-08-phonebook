import React, { useEffect } from 'react'
import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import css from '../Contacts/Contacts.module.css'
import ContactList from '../ContactsList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'features/contact/getContact';
import { fetchContacts } from 'features/contact/contacts-operations';
import { Message } from 'components/Message/Message';

const ContactsView = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
      
  return (
    <div className={css.list_style}>
      <h1 className={css.list_item}>Your phonebook</h1>
      <Form />

      <h2 className="list_item">Contacts</h2>
      <Filter />
      {contacts.length === 0 ? <Message /> : <ContactList />}
    </div>
  );
}

export default ContactsView



