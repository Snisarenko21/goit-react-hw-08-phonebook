import { Contact } from '../Contact';
import { List } from './ContactList.styled';
import { useFilteredContacts } from 'hooks/useFilteredContacts';

export const ContactList = () => {
  const { contacts, filteredContacts } = useFilteredContacts();

  return (
    <>
      {contacts &&
        (contacts.length > 0 ? (
          <List>
            {filteredContacts.map(contact => (
              <Contact
                key={contact.id}
                id={contact.id}
                name={contact.name}
                phone={contact.phone}
              />
            ))}
          </List>
        ) : (
          <p>There no contacts</p>
        ))}
    </>
  );
};
