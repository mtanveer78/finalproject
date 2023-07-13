import { Navigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';

export const ProtectedRoute = ({ children }) => {
  const [cookies, setCookie] = useCookies(['token']);
  const user = cookies.token
  if (!user) {
    return <Navigate replace to="/login" />
  }
  return children
}

export const PublicRoute = ({ children }) => {
  const user = localStorage.getItem('token')
  if (!user) {
    return children
  }
  return <Navigate replace to="/login" />
}