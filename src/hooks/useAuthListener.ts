import { useState, useEffect, useContext } from 'react';
import { User } from './../types';
import { FirebaseContext } from '../context/auth';

export interface IUseAuthListenerReturnType {
  user: User | null;
}

export default function useAuthListener(): IUseAuthListenerReturnType {
  const [user, setUser] = useState<User | null>(
    JSON.parse(localStorage.getItem('authUser') || '')
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser: any) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user };
}
