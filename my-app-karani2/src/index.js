import React from 'react';
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css'
import reducer ,{ initialState } from './Reducer';
import { StateProvider } from './StateProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
//import * as serviceWorker from 
ReactDOM.render(
   
<React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App/>
    </StateProvider>

</React.StrictMode>
, document.getElementById('root')
);
