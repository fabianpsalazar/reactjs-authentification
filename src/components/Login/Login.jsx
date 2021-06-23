import React, { useState } from 'react';
import PropTypes from 'prop-types'
import './Login.css'

async function loginUser(credentials) {
  const URL =  'http://localhost:3001/users/sign_in'
  // const URL =  'https://hidden-dusk-35513.herokuapp.com/users/sign_in'
  return fetch(URL, {
    method: 'POST',
    body: JSON.stringify(credentials),
    
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: "same-origin"
  })
  .then(data => data.json())
}

function Login({ setToken }) {
  const [email, setEmail]       = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async e => {
    e.preventDefault()
    const token = await loginUser({
      user: {
        email,
        password
      }
    })
    setToken(token)
  }

  return (
    <div className='login-wrapper'>
      <h1>Please Log In</h1>
    <form onSubmit={ handleSubmit }>
        <label>
            <p>Email</p>
            <input type='text' onChange={ e => setEmail(e.target.value)} />
        </label>
        <label>
            <p>Password</p>
            <input type='password' onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login
