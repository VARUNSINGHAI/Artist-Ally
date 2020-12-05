import React from 'react';
import "./Login.css";
import { Button } from '@material-ui/core';
import {auth,provider} from "./firebase";
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./reducer";

function Login() {
    const [state,dispatch]=useStateValue();


    const signIn=() => {
        //Sign in...
        auth.signInWithPopup(provider)
        .then((result)=>{
            dispatch({
                type: actionTypes.SET_USER,
                user:result.user,
            })
            console.log(result.user);
        })
        .catch((error)=> alert(error.message));//print out whatever the message is there
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img 
                src="https://urbanjungle.ca/wp-content/uploads/2014/01/letter-a-logo-uppercase.jpg"
                alt=""
                />
                <p align="center">
                    Welcome to Artist Ally !
                </p>
                <img
                src="https://images.unsplash.com/photo-1492546662075-aabebf46dee2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                alt=""

                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign in
            </Button>
            
        </div>
    );
}

export default Login;
