import './App.css';
import { Route, Switch, HashRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import NavBar from "./components/shared/NavBar";
import { Routes } from './router/Routes';

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <NavBar/>
        {/* <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/contributions" component={ContributionsPage} />
          <Route path="/more" component={MorePage} />
          <Route path="/" component={HomePage} />
        </Switch> */}
        <Routes/>
      </HashRouter>
    </div>
  );
}

export default App;
