import './App.css';
import './output.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Summary from './pages/Summary';
import Contacts from './pages/Contacts';
import AddTask from "./components/AddTask";

// MAIN PAGE
function App() {
  return (
    <>
      <Navbar />
      <AddTask/>
      <Footer />
    </>
  );
}

export default App;
