import './App.css';
import './output.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Summary from './pages/Summary';
import Contacts from './pages/Contacts';

// MAIN PAGE
function App() {
  return (
    <>
      <Navbar />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
