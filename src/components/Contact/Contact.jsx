import PropTypes from 'prop-types';
import { ContactItem, ContactButton, ContactNumber } from './Contact.styled';
import { useDeleteContactMutation } from 'redux/contactSlice';
import { toast } from 'react-toastify';

export const Contact = ({ id, name, phone }) => {
  const [handleDelete] = useDeleteContactMutation();
  return (
    <ContactItem>
      {name}:
      <ContactNumber /> {phone}
      <ContactButton
        type="button"
        onClick={() => {
          handleDelete(id);
          toast.success(`You delete contact ${name}`);
        }}
      >
        delete
      </ContactButton>
    </ContactItem>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
