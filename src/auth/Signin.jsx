// Signin.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { useNavigate, NavLink } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const validateEmail = (email) => {
    // Basic email pattern validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSignin = (e) => {
    e.preventDefault();

    // Validate email format
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Ensure password is not empty
    if (password.trim() === '') {
      setError('Password cannot be empty.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        console.log('User signed in: ', user);
        navigate("/home"); // Use navigate for routing
        setError(''); // Clear error on successful sign-in
        setEmail(''); // Clear email field
        setPassword(''); // Clear password field
      })
      .catch((error) => {
        // Handle different error codes for better feedback
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/user-not-found') {
          setError('No user found with this email address.');
        } else if (errorCode === 'auth/wrong-password') {
          setError('Incorrect password. Please try again.');
        } else {
          setError(errorMessage);
        }
        console.error('Error signing in: ', errorCode, errorMessage);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-6 rounded shadow-md w-80" onSubmit={handleSignin}>
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign In
        </button>
        <NavLink to="/get-started" className="block mt-4 text-blue-700 underline text-center">
          New User? Sign up here.
        </NavLink>
      </form>
    </div>
  );
};

export default Signin;
