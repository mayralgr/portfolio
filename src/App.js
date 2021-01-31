import './App.css';
import { HashRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import NavBar from "./components/shared/NavBar";
import { Routes } from './router/Routes';

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <NavBar/>
        <Routes/>
      </HashRouter>
    </div>
  );
}

export default App;
