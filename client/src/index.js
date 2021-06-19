// import React from 'react';
// import ReactDOM from 'react-dom';
// import Insert from './Insert';
//
// ReactDOM.render(
//     <Insert />,
//   document.getElementById('root')
// );
//
import React from 'react';
import ReactDOM from 'react-dom';
import Insert from './Insert';
import  Cards from './Cards';

import 'bootstrap/dist/css/bootstrap.min.css';


import {BrowserRouter as Router, Route} from 'react-router-dom'

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Insert} />
            <Route exact path="/cards" component={Cards} />

        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

