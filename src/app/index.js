import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'

import AccountsList from './components/AccontsList.jsx';
import configureStore from '../state/configureStore.js';

const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <div className="col-md-10 col-md-offset-1">
                        <AccountsList/>
                    </div>
                </div>
            </Provider>
        )
    }
}

render(<App/>, document.getElementById('app'));