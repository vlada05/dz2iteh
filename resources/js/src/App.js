import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import Manufacturers from './components/Manufacturers';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router className="App__container">
            <Navbar />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/add">
                    <Add />
                </Route>

                <Route path="/edit/:id">
                    <Edit />
                </Route>

                <Route path="/manufacturers">
                    <Manufacturers />
                </Route>
            </Switch>
        </Router>
    );
};

ReactDom.render(<App />, document.getElementById('app'));