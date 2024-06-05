import App from '../App.jsx'
import LoginUser from '../users/LoginUser.jsx'


function parseJwt (token) {
    const baseUrl = token.split('.')[1]
    const base64 = baseUrl.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
    return JSON.parse(jsonPayload)
}
  let tokenExistAndStillValid = (parseJwt(localStorage.getItem('token')).exp * 1000 > Date.now())

const Main = () => {
    return (
        <>
        {tokenExistAndStillValid ? <App/> : <LoginUser/>}
        </>
    )

}
export default Main