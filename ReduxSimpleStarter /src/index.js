import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
    render() {
        return <div>Hello!</div>
    }
}

class Goodbye extends React.Component {
    render() {
        return <div>Goodbye!</div>
    }
}

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BronserRouter>
            <div>
                <Route path="/hello" component={Hello}/>
                <Route path="/goodbye" component={Goodbye}/>
            </div>
        </BronserRouter>
    </Provider>
    , document.querySelector('.container'));
