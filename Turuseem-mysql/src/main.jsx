import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css" 
// import 'flowbite';
// import "flowbite-react"
// import "flowbite/dist/flowbite.turbo.js"
// import Menu from './components/menuDropdown';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App/>
      {/* <div className='flex justify-center h-screen'>
      <Menu/>
      </div> */}
  </React.StrictMode>
)
