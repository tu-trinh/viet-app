import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Switcher from './Switcher';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Switcher />, document.getElementById('root'));
registerServiceWorker();
