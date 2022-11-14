import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
