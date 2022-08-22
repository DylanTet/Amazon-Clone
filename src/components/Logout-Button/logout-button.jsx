import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (

    isAuthenticated && (
      <form>
        <button onClick={() => logout()}>Log Out</button>
      </form>
    )
  );
};

export default LogoutButton;