import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Main1 } from './saterouter/Main1'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Main1 />
    </BrowserRouter>

    
  </React.StrictMode>,
)
