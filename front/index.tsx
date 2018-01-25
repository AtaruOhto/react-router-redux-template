import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {counterStore} from 'stores/counterStore'
import {counterHistory} from 'router/couterRouter'
import {ConnectedRouter} from "react-router-redux";
import {runCounterSaga} from "sagas/counterSaga";
import App from 'containers/app/index'

export const renderIndex = () => {
    render(
        <Provider store={counterStore}>
            <ConnectedRouter history={counterHistory}>
                <App/>
            </ConnectedRouter>
        </Provider>,
        document.querySelector('#root')
    );
    runCounterSaga();
}
