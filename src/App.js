import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/index'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <div>Checkcout </div>
          </Route>
          <Route path="/login">
            <div className="app">
              <div>Login </div>
            </div>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>

    </Router>

  );
}

export default App;
