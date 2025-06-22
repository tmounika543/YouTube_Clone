import { createContext, useState } from 'react';

export const LoginDataContext = createContext([{ user: null }, () => { }])

export default function LoginProvider({ children }) {
  const [loginData, setLoginData] = useState({ user: null });

  return (
    <LoginDataContext.Provider value={[loginData, setLoginData]}>
      {children}
    </LoginDataContext.Provider>
  );
}