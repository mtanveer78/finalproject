import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('token')
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