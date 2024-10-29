import './App.css';
import './output.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Summary from './pages/Summary';
import Contacts from './pages/Contacts';
import AddTask from "./components/AddTask";
import ContactInfo from './pages/ContactInfo';
import Tasks from './pages/Tasks';

// MAIN PAGE
function App() {
  return (
    <>
      <Navbar />
      <Tasks />
      {/* <AddTask /> */}
      {/* <Contacts /> */}
      {/* <ContactInfo
        name={"Anton Meyer"}
        mail={"anton.meyer@somemail.com"}
        phone={"This should not be a phone"} /> */}

      <Footer />
    </>
  );
}

export default App;
