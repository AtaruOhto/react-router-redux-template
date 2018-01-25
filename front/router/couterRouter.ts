import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux'
import {History} from "history";

export const HOME_ROUTE = '/';
export const ABOUT_ROUTE = '/about';

export const counterHistory = createHistory();
export const counterRouterMiddleware = routerMiddleware(counterHistory);
export const goHomePage = (history: History) => {history.push(HOME_ROUTE)};
export const goAboutPage = (history: History) => {history.push(ABOUT_ROUTE)};
