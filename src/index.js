import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { hydrate } from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

if(root.hasChildNodes()){
hydrate(
    <React.StrictMode>
    <App />
  </React.StrictMode>
  )
} else{
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}


