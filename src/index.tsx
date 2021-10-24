import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css';
// import App from './App'

import { Provider } from "react-redux";
import { store } from "./redux/store"
import InputValue from './components/inputValue/InputValue';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <InputValue />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)