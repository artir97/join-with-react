import './App.css';
import './output.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";

// MAIN PAGE
function App() {
  return (
    <>
        <Navbar/>
        <AddTask/>
        <Footer/>
    </>
  );
}

export default App;
