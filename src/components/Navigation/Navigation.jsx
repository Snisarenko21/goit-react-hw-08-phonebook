import { useSelector } from 'react-redux';
import { Link, Container, Nav } from './Navigation.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMeny';
import authSelectors from 'redux/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Nav>
      <Container>
        <Link to="/">Contacts</Link>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Nav>
  );
};
