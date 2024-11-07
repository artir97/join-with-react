
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { DragProvider } from './contexts/DragContext';
import { ContactsProvider } from "./contexts/contactsContext";

import BaseWrapper from './components/BaseWrapper';
import Summary from './pages/Summary';
import Contacts from './pages/Contacts';
import AddTask from "./pages/AddTask";
import ContactInfo from './pages/ContactInfo';
import Tasks from './pages/Tasks';
import Help from './pages/Help';
import LogIn from './pages/LogIn';

import './App.css';
import './output.css';

// MAIN PAGE
function App() {
  return (
    <div className='h-screen w-screen'>
      <BrowserRouter>
        <ContactsProvider> {/* Move ContactsProvider here */}
          <Routes>
            <Route path='/' element={<BaseWrapper />}>
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
            </Route>
            <Route path='/login' element={<LogIn />} />
          </Routes>
        </ContactsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
