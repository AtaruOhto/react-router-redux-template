import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {counterStore, counterHistory} from 'stores/counterStore'
import {ConnectedRouter} from "react-router-redux";
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
}
