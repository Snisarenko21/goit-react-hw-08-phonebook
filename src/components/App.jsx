import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Title } from './App.styled';
import { Form } from './Form';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <Form />
      <ToastContainer autoClose={2000} />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
}
