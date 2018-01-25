import {createStore, applyMiddleware, compose} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import rootReducer from 'reducers/index'
import rootSaga from 'sagas/counterSaga'
import {setUpReactDevelopmentTool} from 'helpers/reactDevTool'

export const counterHistory = createHistory();
const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers: Array<any> = [];
const middleware = [
    sagaMiddleware,
    routerMiddleware(counterHistory)
];

setUpReactDevelopmentTool(enhancers);

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

export const counterStore = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);

sagaMiddleware.run(rootSaga);
