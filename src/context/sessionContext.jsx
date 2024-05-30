import { createContext, useContext, useState } from 'react';

const SessionContext = createContext();
export const useSession = () => useContext(SessionContext);

const SessionProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accessToken')
  );
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem('username')
  );

  const startSession = (accessToken, user) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('user', user);
    setAccessToken(localStorage.getItem('accessToken'));
    setCurrentUser(localStorage.getItem('user'));
    setTimeout(() => {
      endSession();
      alert(
        'Your session has expired. Please log in again to continue using the app'
      );
    }, 999 * 1000);
  };

  const endSession = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    setAccessToken(localStorage.getItem('accessToken'));
    setCurrentUser(localStorage.getItem('user'));
  };

  const value = {
    accessToken,
    currentUser,
    startSession,
    endSession,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export default SessionProvider;
