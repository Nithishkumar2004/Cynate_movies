import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase'; // Ensure this path is correct
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe(); // Use a cleanup function
  }, []);

  const value = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Prevents rendering of children until loading is false */}
    </AuthContext.Provider>
  );
};
