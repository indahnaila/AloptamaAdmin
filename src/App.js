import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
// import LoginPage from './views/LoginPage/LoginPage';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const LoginPage = React.lazy(() => import('./views/LoginPage/LoginPage'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route  exact path="/Dashboard" name="Home" render={props => <TheLayout {...props}/>} />
              <Route path="/" name="LoginPage" render={props => <LoginPage {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
