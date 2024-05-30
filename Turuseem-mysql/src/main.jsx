import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import UserForm from './users/CreateAccount.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js'
import LoginForm from './users/LoginUser.jsx';

// import CrudApprentices from './apprentice/crudApprentices.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <LoginForm/>
    </BrowserRouter>
      {/* <App /> */}

  </React.StrictMode>
)
