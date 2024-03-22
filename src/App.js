import './App.css';
import NavBar from './components/Navbar';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </>
  );
}

export default App;
