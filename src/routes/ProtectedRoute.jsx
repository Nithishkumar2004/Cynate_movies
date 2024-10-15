import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Use effect to manage modal visibility based on authentication status
  useEffect(() => {
    if (!currentUser) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false); // Close modal if user is authenticated
    }
  }, [currentUser]); // Dependency array with currentUser

  // Function to handle modal confirmation
  const handleOk = () => {
    setIsModalOpen(false); // Close the modal
    navigate('/'); // Redirect to the home page
  };

  return (
    <>
      {children}
      {isModalOpen && (
        <div
          id="info-popup"
          tabIndex="-1"
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto overflow-x-hidden bg-gray-800 bg-opacity-50" // Overlay with opacity
        >
          <div className="relative p-4 w-full max-w-lg bg-white rounded-lg shadow dark:bg-gray-800">
            <div className="flex items-center mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
              <svg
                className="w-6 h-6 text-red-600 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12s4.03-9 9-9 9 4.03 9 9z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Please log in to continue</h3>
            </div>
            <div className="flex justify-center">
              <button
                id="ok-button"
                type="button"
                className="py-2 px-4 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={handleOk} // Handle OK button click
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProtectedRoute;
