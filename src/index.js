import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux'
import store from './store';
import 'antd/dist/antd.css';
const app = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)
ReactDOM.render(
    app,
  document.getElementById('root')
);
