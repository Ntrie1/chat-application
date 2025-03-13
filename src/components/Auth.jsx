import React from 'react'
import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth"

export default function Auth() {
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider);
    }
  return (
    <>
    <div className='Auth'>Auth</div>
    <p>Sign in with Google to Continue</p>
    <button onClick={signInWithGoogle}>Sign In With Google</button>
    </>
  )
}
