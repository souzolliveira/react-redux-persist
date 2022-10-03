import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './views/App/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
