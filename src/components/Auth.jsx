import React from 'react'
import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function Auth(props) {
  const {setIsAuth} = props;

    const signInWithGoogle = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        cookies.set('auth-token', result.user.refreshToken);
        setIsAuth(true);
      } catch (error) {
        console.error(error);
      }
       
        
    }
  return (
    <>
    <div className='Auth'>Auth</div>
    <p>Sign in with Google to Continue</p>
    <button onClick={signInWithGoogle}>Sign In With Google</button>
    </>
  )
}
