import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Link to="register">Registration</Link>
      <Link to="login">Login</Link>
    </div>
  );
};
