import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { TestimonialsContextProvider } from './context/TestimonialContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TestimonialsContextProvider>
      <App />
    </TestimonialsContextProvider>
  </React.StrictMode>
);