import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles/GlobalStyles.tsx';
import './index.css';

const isDevelopment = process.env.NODE_ENV === 'development';
// const basename = isDevelopment ? '/' : '/portfolio';
const basename = isDevelopment ? './' : '/';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyles>
            <Router basename={basename}>
                <App />
            </Router>
        </GlobalStyles>
    </React.StrictMode>,
);
