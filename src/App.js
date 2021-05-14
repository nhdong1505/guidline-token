import React, { useRef, createContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/index'
import Home from './pages/Home'
import './common/styles/styles.scss';
import './App.css';
import RefContext from './common/refContext'
import DrawMenu from './components/drawerMenu'
const App = () => {
  const ecoAreaRef = useRef(null)
  const howtoBuyRef = useRef(null)
  const swapRef = useRef(null)

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
            <RefContext.Provider value={{ ecoAreaRef, howtoBuyRef, swapRef }} >
              <DrawMenu />
              <Header />
              <Home />
            </RefContext.Provider>
          </Route>
        </Switch>
      </div>

    </Router>

  );
}

export default App;
