import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Translator from './components/Translator';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
        <div className="App">
            <main>
                <Switch>
                    <Route exact path="/" component={ Register } />
                    <Route path="/translator" component={ Translator } />
                    <Route path="/profile" component={ Profile } />
                    <Route path="*" component={ NotFound } />
                </Switch>
            </main>
        </div>
    </Router>
  );
}

export default App;
