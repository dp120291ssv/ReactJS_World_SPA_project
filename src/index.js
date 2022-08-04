import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './i18n';

import App from './App';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<div> Loading ... </div>}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);
