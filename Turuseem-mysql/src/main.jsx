import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'tailwindcss/colors.js'
import { BrowserRouter } from 'react-router-dom';
import "D:/JORGE/PROYECTO-TURUSEEM-REACT-MYSQL/Turuseem-mysql/src/index.css"
// import 'bootstrap/dist/js/bootstrap.min.js'
// import Home from "./home/home.jsx";
// import PDF from './memorandum/sendMemorandum.jsx'
// import CreateAccount from './users/CreateAccount.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)
