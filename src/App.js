
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { DragProvider } from './contexts/DragContext';
import { ContactsProvider } from "./contexts/ContactsContext";
import { TasksProvider } from "./contexts/TasksContext";

import BaseWrapper from './components/navigation/BaseWrapper';
import NavbarWrapper from './components/navigation/NavbarWrapper';

import Summary from './pages/Summary';
import Contacts from './pages/Contacts';
import AddTask from "./pages/AddTask";
import ContactInfo from './pages/ContactInfo';
import Tasks from './pages/Tasks';
import Help from './pages/Help';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';

import './App.css';
import './output.css';
import { NotificationProvider } from './contexts/NotificationContext';

// MAIN PAGE
function App() {
  return (
    <div className='h-screen w-screen'>
      <BrowserRouter basename='/join-with-react'>
        <ContactsProvider>
          <TasksProvider>
            <NotificationProvider>
              <Routes>
                {/** Default route in the next line */}
                <Route index element={<Navigate to="/login" replace />} />

                <Route path='/' element={<BaseWrapper />}>
                  <Route path="/summary" element={<Summary />} />
                  <Route path="/tasks" element={
                    <DragProvider>
                      <Tasks />
                    </DragProvider>
                  } />
                  <Route path="/addTask/:statusIndex?" element={<AddTask />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/contact-info/:email" element={<ContactInfo />} />
                  <Route path="/help" element={<Help />} />
                  <Route path="/legal" element={<LegalNotice />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                </Route>
                <Route path='/login' element={<LogIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/ext' element={<NavbarWrapper />}>
                  <Route path='/ext/legal' element={<LegalNotice />} />
                  <Route path='/ext/privacy' element={<PrivacyPolicy />} />
                </Route>
              </Routes>
            </NotificationProvider>
          </TasksProvider>
        </ContactsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
