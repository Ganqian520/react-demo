import { BrowserRouter, Redirect, Route,Switch} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux'
import Index from './pages/index/index'
import store from './store/store'
import { history } from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact render={()=><Redirect to='/index'></Redirect>}></Route>
          <Route path='/index' render={()=><Index />}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
