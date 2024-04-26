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

  const startSession = (accessToken, username) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('username', username);
    setAccessToken(localStorage.getItem('accessToken'));
    setCurrentUsername(localStorage.getItem('username'));
  };

  const endSession = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
    setAccessToken(localStorage.getItem('accessToken'));
    setCurrentUsername(localStorage.getItem('username'));
  };

  const value = {
    accessToken,
    currentUsername,
    startSession,
    endSession,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export default SessionProvider;
