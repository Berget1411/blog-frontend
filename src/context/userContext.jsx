import { createContext, useContext, useState } from 'react';

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accessToken')
  );
  const [currentUsername, setCurrentUsername] = useState(
    localStorage.getItem('username')
  );

  const loginUser = (accessToken, username) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('username', username);
    setAccessToken(localStorage.getItem('accessToken'));
    setCurrentUsername(localStorage.getItem('username'));
  };

  const logoutUser = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
    setAccessToken(localStorage.getItem('accessToken'));
    setCurrentUsername(localStorage.getItem('username'));
  };

  const value = {
    accessToken,
    currentUsername,
    loginUser,
    logoutUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
