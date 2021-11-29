import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Switch, Route, linkElement, useRouteMatch} from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart/Cart';
import Index from './components/Blog/Index';
import Detail from './components/Blog/Detail';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
      <Router>
          <App>
            <Switch>
                <Route  exact path='/' component={Home} />
                <Route  path='/Cart/Cart' component={Cart} />
                <Route  path='/Blog/Index' component={Index} />  
                <Route  path='/Blog/Detail' component={Detail} />                
            </Switch>
          </App>
      </Router>
  </div>,
  document.getElementById('root')
);


reportWebVitals();
