import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Search from './components/Search';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;