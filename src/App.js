import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import { Route } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';
import {Link, Switch} from 'react-router-dom'
import StrictAcess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users/:id" render={(props) => <Users {...props} greetingsMessage="Good Morning" />} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/strictacess" render={() => <StrictAcess user={{username: 'joao', password: '1234'}} />} />
          {/* <Route path="/strictacess" component={StrictAcess} /> */}
        </Switch>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/strictacess">Strict Access</Link>
      </BrowserRouter>
    );
  }
}

export default App;
