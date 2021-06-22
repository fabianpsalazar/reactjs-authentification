import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './Login.css'
import loginUser from './loginuser';


export default function Login({setToken}) {
    // Save input in the state
    const [email,setEmail] = useState();
    const [password, setPassword] = useState();

    // Prevent de default behavior(refresh), then send the user data to backend to check it and recieve a waiting token.
    const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginUser({
            user: {
                email,
                password,
            }
        });
        setToken(token)
    }

    return (
        <div className='login-wrapper'>
            <h1>Please Log in</h1>
                <form onSubmit={handleSubmit}> {/* handle function, check after submit*/}
                    <label>
                        <p>Username</p>
                        <input type='text' onChange={e => setEmail(e.target.value)}/> {/* Check every change on the input form and save the value in the state */}
                    </label>
                    <label>
                        <p>Password</p>
                        <input type='password' onChange={e => setPassword(e.target.value)}/> {/* Check every change on the input form and save the value in the state */}
                    </label>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
        </div>
    )
}

Login.prototypes = {
    setToken : PropTypes.func.isRequired
};