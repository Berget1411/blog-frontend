import { createContext, useContext, useState } from 'react';

const SessionContext = createContext();
export const useSession = () => useContext(SessionContext);

const SessionProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accessToken')
  );
  const [currentUsername, setCurrentUsername] = useState(
    localStorage.getItem('username')
  );
  const [admin, setAdmin] = useState(localStorage.getItem('isAdmin'));

  const startSession = (accessToken, username, isAdmin) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('username', username);
    localStorage.setItem('isAdmin', isAdmin);
    setAccessToken(localStorage.getItem('accessToken'));
    setCurrentUsername(localStorage.getItem('username'));
    setAdmin(localStorage.getItem('isAdmin'));
    setTimeout(() => {
      endSession();
      alert(
        'Your session has expired. Please log in again to continue using the app'
      );
    }, 999 * 1000);
  };

  const endSession = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
    localStorage.removeItem('isAdmin');
    setAccessToken(localStorage.getItem('accessToken'));
    setCurrentUsername(localStorage.getItem('username'));
    setAdmin(localStorage.getItem('isAdmin'));
  };

  const value = {
    accessToken,
    currentUsername,
    admin,
    startSession,
    endSession,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export default SessionProvider;
