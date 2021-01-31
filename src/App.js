import './App.css';
import NavBar from "./components/shared/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './router/Routes'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
