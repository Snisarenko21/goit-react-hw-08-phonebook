import PropTypes from 'prop-types';
import { List, Container } from './ContactList.styled';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

const ContactList = ({ items }) => {
  return (
    <Container>
      {items &&
        (items.length > 0 ? (
          <List>
            {items.map(contact => (
              <ContactListItem key={contact.id} {...contact} />
            ))}
          </List>
        ) : (
          <p>There no contacts</p>
        ))}
    </Container>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
