import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { TodoApp } from './containers/App';
import configure from './store';

const store = configure();

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>
    ,
    document.getElementById('root')
);
