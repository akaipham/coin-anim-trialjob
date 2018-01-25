import React from 'react';
import ReactDOM from 'react-dom';
import 'popper.js'; //instead of import Popper from 'popper.js/dist/umd/popper.js'; for a small file size
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
