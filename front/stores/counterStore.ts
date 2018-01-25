import {createStore, applyMiddleware, compose} from 'redux'
import {counterRouterMiddleware} from "router/couterRouter";
import rootReducer from 'reducers/index'
import {setUpReactDevelopmentTool} from 'helpers/reactDevTool'
import {counterSagaMiddleware} from 'sagas/counterSaga'

const initialState = {};
const enhancers: Array<Function> = [];
const middleware = [
    counterSagaMiddleware,
    counterRouterMiddleware
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
