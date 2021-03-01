import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Alert from './components/layout/Alert';
import NavBar from './components/layout/NavBar';
import { About } from './components/pages/About';
import User from './components/users/User';

import GitHubState from './context/github/github-state';
import AlertState from './context/alert/alert-state';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <GitHubState>
      <AlertState>
        <BrowserRouter>
          <div className='App'>
            <NavBar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </AlertState>
    </GitHubState>
  );
};

export default App;
