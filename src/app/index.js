import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'

import Accounts from './components/Accounts';
import store from './store';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <div className="col-md-10 col-md-offset-1">
                        <h1>Список</h1>
                        <Accounts/>
                    </div>
                </div>
            </Provider>
        )
    }
}

render(<App/>, document.getElementById('app'));