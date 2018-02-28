import React from 'react';
import ReactDOM from 'react-dom';
import TimersDashBoard from './TimersDashBoard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TimersDashBoard />, document.getElementById('root'));
registerServiceWorker();
