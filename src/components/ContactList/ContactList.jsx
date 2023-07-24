import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { Contact } from 'components/Contact/Contact';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className="listBox">
      {contacts.map(contact => (
        <li key={contact.id} className={css.listBox}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

