import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Categoria from './pages/Categoria'

const Rotas = (
    <Router>
        <div>
            <Route path="/" exact component={App} />
            <Route path="/categoria" exact component={Categoria} />
        </div>
    </Router>
)

ReactDOM.render(Rotas, document.getElementById('root'));
serviceWorker.unregister();
