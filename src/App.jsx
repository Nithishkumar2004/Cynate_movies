import { useState } from "react";
import { AuthProvider } from "./contexts/AuthContext"; // Import AuthProvider
import Footer from "./components/Footer";
import Header from "./components/Header";
import { AllRoutes } from "./routes/AllRoutes";

const App = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query

  return (
    <AuthProvider> {/* Wrap in AuthProvider */}
      <>
        {/* Pass the setSearchQuery function to Header for updating search query */}
        <Header setSearchQuery={setSearchQuery} />
        
        {/* Render routes and pass searchQuery as a prop */}
        <AllRoutes searchQuery={searchQuery} />

        {/* Render the footer */}
        <Footer />
      </>
    </AuthProvider>
  );
};

export default App;
