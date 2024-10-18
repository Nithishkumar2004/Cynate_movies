import { AuthProvider } from "./contexts/AuthContext"; // Import AuthProvider
import Footer from "./components/Footer";
import Header from "./components/Header";
import { AllRoutes } from "./routes/AllRoutes";
import { ToastContainer } from "react-toastify";

const App = () => {
 
  return (

<AuthProvider> {/* Wrap in AuthProvider */}
      <>
        {/* Pass the setSearchQuery function to Header for updating search query */}
        <ToastContainer/>

        <Header />
        
        {/* Render routes and pass searchQuery as a prop */}
        <AllRoutes/>

        {/* Render the footer */}
        <Footer />
      </>
    </AuthProvider>


  );
};

export default App;
