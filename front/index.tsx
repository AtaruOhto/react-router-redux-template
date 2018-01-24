/// <reference types="node" />

declare global {
    interface Window {
        devToolsExtension: any;
    }
}

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {counterStore, counterHistory } from 'stores/counterStore'
import {ConnectedRouter} from "react-router-redux";
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
