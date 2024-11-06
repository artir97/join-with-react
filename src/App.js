import './App.css';
import './output.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Summary from './pages/Summary';
import Contacts from './pages/Contacts';
import AddTask from "./pages/AddTask";
import ContactInfo from './pages/ContactInfo';
import Tasks from './pages/Tasks';
import { DragProvider } from './contexts/DragContext';
import { ContactsProvider } from "./contexts/contactsContext";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MobileSwitch from './components/base/MobileSwitch';
import Sidebar from './components/Sidebar';
import Help from './pages/Help';

// MAIN PAGE
function App() {
  return (
    <BrowserRouter>
      <ContactsProvider> {/* Move ContactsProvider here */}
        <div className='h-screen w-screen'>
          <Navbar />
          <div className='lg:flex lg:full-page-fit'>
            <MobileSwitch desktopComponent={<Sidebar />} />
            <div className='lg:flex-1'>
              <Routes>
                <Route path="/summary" element={<Summary />} />
                <Route path="/tasks" element={
                  <DragProvider>
                    <Tasks />
                  </DragProvider>
                } />
                <Route path="/addTask" element={<AddTask />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/contact-info/:email" element={<ContactInfo />} />
                <Route path="/help" element={<Help />} />
              </Routes>
            </div>
          </div>
          <MobileSwitch mobileComponent={<Footer />} />
        </div>
      </ContactsProvider>
    </BrowserRouter>
  );
}

export default App;
