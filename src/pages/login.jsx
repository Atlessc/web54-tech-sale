/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { loginAdminUser } from './loginAdminUser'

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cookies, setCookie] = useCookies(['adminUser'])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const adminUser = await loginAdminUser(email, password)
    setCookie('adminUser', adminUser, { path: '/' })
    history.push('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <br />
      <input type="submit" value="Login" />
    </form>
  )
}

export default Login
