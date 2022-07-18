import { createStore, applyMiddleware, compose } from "redux";
import { merge, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import axios from '@/api'
import { combineReducers } from "redux"
import { combineEpics,createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';
import { routerMiddleware,connectRouter} from 'connected-react-router';

const initState1 = {
    a: 0,
}
const initState2 = {
    b: 0,
}
const reducer1 = (state=initState1,action) => {
    return {
        ...initState1,
        a:action.data || 0,
    }
}
const reducer2 = (state=initState2,action) => {
    const {type,data} = action
    return {
        ...state,
        b:data || 0,
    }
}

const fetchData = () => ({type: 'FETCH_DATA'})
const fetchDataDone = () => ({type: 'FETCH_DATA_DONE'})
const epic1 = action$ => action$.ofType('FETCH_DATA').mergeMap(action=>
        axios.get('/a')
    )

export const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();


const rootEpic = combineEpics(
    epic1,
);

epicMiddleware.run(rootEpic)

export default createStore(
    combineReducers({
        rooter: connectRouter(history),
        state1:reducer1,
        state2:reducer2,
    }),
    compose(
        applyMiddleware(
            routerMiddleware(history),
            epicMiddleware,
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
)
