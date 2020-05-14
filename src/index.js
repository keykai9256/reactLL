import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from 'react-router-dom'
import "lib-flexible"
import {Provider} from 'react-redux'

import store from './redux/store'
import './index.css';
import My from './page/my/my'
import Home from './page/home/home'

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/my" component={My}></Route>
                <Route component={Home}></Route>
            </Switch>
        </HashRouter>
    </Provider>
    , document.getElementById('root'));
