// import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TeamDetail from './components/TeamDetail/TeamDetail';
import Header from './components/Header/Header';

function App() {
  return (
    <Router >
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/team/:id">
          <TeamDetail />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
