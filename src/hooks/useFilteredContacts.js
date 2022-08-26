import { useGetContactsQuery } from 'redux/contactSlice';
import { getFilter } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export const useFilteredContacts = () => {
  const { data: contacts } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  const filteredContacts = useMemo(() => {
    return contacts?.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }, [filter, contacts]);

  return { filteredContacts, contacts };
};
