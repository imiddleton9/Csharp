import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Vars from './Vars.tsx';
import MoreVars from './MoreVars.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
        <div>
          <h1>Displaying Variables</h1>
          <Vars />
          <h1>Displaying More Variables</h1>
          <MoreVars />
        </div>
  </React.StrictMode>,
)
