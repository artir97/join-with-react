import './App.css';
import './output.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Summary from './pages/Summary';

// MAIN PAGE
function App() {
  return (
    <>
      <Navbar />
      <Summary />
      <Footer />
    </>
  );
}

export default App;
