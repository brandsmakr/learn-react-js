import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';

function App() {
  return (
    <>

    <Navbar title="TextUtils" about="About Us" />
    <div className='container my-5 py-5'>
    <TextForm heading="Enter the text to analyze" />
    <About />
    </div>

    </>
  );
}

export default App;
