import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import authSelectors from 'redux/authSelectors';
import { useLogoutMutation } from 'redux/authAPI';
import { Container, Avatar, Name } from './UserMeny.styled';

export default function UserMenu() {
  const [logOut] = useLogoutMutation();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Container>
      <Avatar>{name[0]}</Avatar>
      <Name>Welcome {name}</Name>
      <Button
        type="button"
        variant="contained"
        color="primary"
        size="small"
        onClick={() => logOut()}
      >
        Log out
      </Button>
    </Container>
  );
}
