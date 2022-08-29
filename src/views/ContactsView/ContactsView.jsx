import toast, { Toaster } from 'react-hot-toast';
import { InfinitySpin } from 'react-loader-spinner';
import { useState } from 'react';
import { ContactForm } from 'components/ContactForm';
import { Container } from './ContactsView.styled';
import { Filter } from 'components/Filter/Filter';
import { useGetContactQuery } from 'redux/myContactsSlice';
import { useAddContactMutation } from 'redux/myContactsSlice';
import ContactList from 'components/ContactList';

export default function ContactsView() {
  const [filter, setFilter] = useState('');
  const { data: contacts } = useGetContactQuery();
  const [addMyContact, { isLoading }] = useAddContactMutation();

  const addContact = value => {
    for (const contact of contacts) {
      if (contact.name === value.name) {
        toast.error(`${value.name} is already in contacts.`);
        return;
      }
    }
    addMyContact(value);
    toast.success(`Contact ${value.name} has been added`);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
  };
  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        {isLoading ? (
          <InfinitySpin color="grey" />
        ) : (
          <ContactList items={visibleContacts} />
        )}
      </>

      <Toaster />
    </Container>
  );
}
