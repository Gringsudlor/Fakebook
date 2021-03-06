import { Button, TextField } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import { auth, provider, signInWithPopup } from "./firebase"
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //sign in
        signInWithPopup(auth, provider)
         .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className='login'>
            <div className='login_logo'>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3479/3479411.png"
                    alt=""
                />
                <h1>Fakebook</h1>

            </div>
            <TextField className='user' label='Username' placeholder='Enter username'></TextField>
            <TextField className='pass' label='Password' placeholder='Enter password' type={'password'} ></TextField>
            <Button type='submit' >
                Log In
            </Button>
            <Button className='signIn' type='submit' onClick={signIn}>
                Sign In
            </Button>
            
        </div>
    )
}

export default Login
