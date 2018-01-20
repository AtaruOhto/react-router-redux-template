import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import {counterStore, counterHistory } from 'stores/counterStore'
import App from 'containers/app/index'

render(
  <Provider store={counterStore}>
    <ConnectedRouter history={counterHistory}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root')
);
