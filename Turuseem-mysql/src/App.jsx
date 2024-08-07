import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import AuthLayout from './layout/authLayout'
import RutaProtegida from './layout/RutaProtegida'


import LoginForm from './users/LoginUser'
import UserForm from './users/CreateAccount'
import OlvidePassword from './users/OlvidePassword'
import ConfirmarCuenta from './users/ConfirmarCuenta'
import CambiarPassword from './users/CambiarPassword'

import { AuthProvider } from './context/authProvider'
// import { AprendizProvider } from './context/aprendizProvider'

import Home from './home/home'
import CrudMemorandum from './memorandum/crudMemorandum'
import VerPdf from './memorandum/verPDF'

import CrudApprentices from './apprentice/crudApprentices'


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
            <Routes>
              <Route path='/' element={<AuthLayout/>}>
                <Route index element={<LoginForm/>}/>
                <Route path='registrar' element= {<UserForm />}/>
                <Route path='olvide-password' element= {<OlvidePassword />}/>
                <Route path='olvide-password/:token' element= {<CambiarPassword />}/>
                <Route path='confirmar/:id' element= {<ConfirmarCuenta />}/>
              </Route>

              <Route path='/admin' element={<RutaProtegida/>}>
                <Route index element= {<Home/>}/>
                <Route path='aprendices' element={<CrudApprentices/>}>
                  {/* <Route path='importCSV' element={<ImportarCSV/>}/> */}
                </Route>
                <Route path='memorandos' element={<CrudMemorandum/>}/>
                {/* <Route path='/perfil' element={<MemorandumPDF/>}/> */}
                <Route path='PdfView' element={<VerPdf/>}/>
                {/* <Route path='dorp' element={<Menu/>}/> */}
              </Route>
            </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>  
  )
}
export default App
