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
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// MAIN PAGE
function App() {
    return (
        <Router>
            <Navbar/>
                <Switch>
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
                    <Route path="/contactInfo">
                        <ContactInfo
                            name={"Anton Meyer"}
                            mail={"anton.meyer@somemail.com"}
                            phone={"This should not be a phone"}/>
                    </Route>
                </Switch>
            <Footer/>
        </Router>
    );
}

export default App;