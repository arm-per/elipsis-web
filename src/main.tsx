import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Dictionaries } from './Contexts/Dictionaries.tsx'
import { Accessibility } from './Contexts/Accessibility.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Accessibility>
      <Dictionaries>
        <App />
      </Dictionaries>
    </Accessibility>
  </React.StrictMode>,
)
