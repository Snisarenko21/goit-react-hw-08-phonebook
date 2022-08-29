import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import toast from 'react-hot-toast';
import { useDeleteContactMutation } from 'redux/myContactsSlice';
import { Item, Link, ContactWrapper } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactMutation();

  const handelDeleteContact = id => {
    deleteContacts(id);
    toast.success(`Contact ${name} deleted`);
  };

  return (
    <Item>
      <p>{name}</p>
      <ContactWrapper>
        <Link href={`tel: ${number}`}>{number}</Link>
        <Button
          variant="contained"
          color="primary"
          startIcon={<DeleteIcon />}
          onClick={() => handelDeleteContact(id)}
          disabled={isDeleting}
          size="small"
        >
          Delete
        </Button>
      </ContactWrapper>
    </Item>
  );
};
