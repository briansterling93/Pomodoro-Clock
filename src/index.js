import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.js';
import Styles from './Styles/styles.scss';
import * as serviceWorker from './serviceWorker';

const Main = () => (
    <div>
        <App />
    </div>
)

ReactDOM.render(<Main />, document.getElementById('root'));






serviceWorker.unregister();
