import React from 'react'
import ReactDOM from 'react-dom'
import  { BrowserRouter, Route } from 'react-router-dom'
import Layout from './components/pages/Layout'
import { Provider} from 'react-redux';

import {Home} from './components/pages/Home'
import store from './store';

const app = document.getElementById('root');
ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
        <Layout>
            <Route path='/Home' component={Home}></Route>
        </Layout>
    </Provider>
</BrowserRouter>

,app)

