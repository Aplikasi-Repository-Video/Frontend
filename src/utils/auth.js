import { jwtDecode } from 'jwt-decode'

export function getUserFromToken() {
  const token = localStorage.getItem('token')
  if (!token) return null

  try {
    return jwtDecode(token)
  } catch (err) {
    console.error('Error decoding token:', err)
    return null
  }
}
