import { AuthProvider } from "./contexts/AuthContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { AllRoutes } from "./routes/AllRoutes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
 
  return (

<AuthProvider>
      <>
        <ToastContainer/>

        <Header />
        
        <AllRoutes/>

        <Footer />
      </>
    </AuthProvider>


  );
};

export default App;
