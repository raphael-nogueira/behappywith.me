import React from 'react'
import { createRoot } from 'react-dom/client';

import './img/favicon.ico';
import './css/index.css';
import './css/pure-min.css';
import App from './components/app';

const container = document.getElementById('main');
const root = createRoot(container);

root.render(
    <App />
);