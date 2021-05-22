import api from './apiService'

export const RegisterUser = async (user) => {
  const newUser = await api.post('/user/register', user)
  return newUser
}