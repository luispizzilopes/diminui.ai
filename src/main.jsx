import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import "./GlobalStyle.css";

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  //</StrictMode>,
)
