import React from 'react'
import ReactDOM from 'react-dom/client'
// import { ConnectedRouter,connectRouter,routerMiddleware as createRouterMiddleware } from 'connected-react-router';
// import { createBrowserHistory } from 'history';
import {Provider} from 'react-redux'


import App from './App'
import './index.css'
import store from './redux/index'

// const history = createBrowserHistory()
// const routerReducer = connectRouter(history);
// const routerMiddleware = createRouterMiddleware(history);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
)
