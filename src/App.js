import './App.css';
import './output.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Summary from './pages/Summary';
import Contacts from './pages/Contacts';
import AddTask from "./components/AddTask";
import ContactInfo from './pages/ContactInfo';
import Tasks from './pages/Tasks';
import {DragProvider} from './contexts/DragContext';
import {ContactsProvider} from "./contexts/contactsContext";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// MAIN PAGE
function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <ContactsProvider>
                    <Route path="/summary">
                        <Summary/>
                    </Route>
                    <Route path="/tasks">
                        <DragProvider>
                            <Tasks/>
                        </DragProvider>
                    </Route>
                    <Route path="/addTask">
                        <AddTask/>
                    </Route>

                    <Route path="/contacts">
                        <Contacts/>
                    </Route>
                    <Route path="/contact-info/:email">
                        <ContactInfo/>
                    </Route>
                </ContactsProvider>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;