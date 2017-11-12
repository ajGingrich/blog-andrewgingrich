import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import App from '../components/App';


const Routes = () => (
    <Router>
        <Route path="/:filter?" component={App}/>
    </Router>
);

export default Routes
