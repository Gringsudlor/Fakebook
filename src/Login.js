import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import { auth, provider, signInWithPopup } from "./firebase"

function Login() {
    const signIn = () => {
        //sign in
        signInWithPopup(auth, provider)
         .then((result) => {
            console.log(result);
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
            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
            
        </div>
    )
}

export default Login
