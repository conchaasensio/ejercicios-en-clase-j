import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../App.css';
import Home from './Home';
import Pricing from './Pricing';
import About from './About';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div>
          <header>
            <nav>
              <ul>
                <li className="tab">
                  <Link to="/">Home</Link>
                </li>
                <li className="tab">
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li className="tab">
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/pricing" component={Pricing} />
              <Route path="/about" component={About} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
