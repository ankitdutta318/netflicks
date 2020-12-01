import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/auth';

export default function useAuthListener() {
  const [user, setUser] = useState<object | null>(
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
