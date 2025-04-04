import { useRef, useState } from 'react'
import './App.css'
import Auth from './components/Auth'
import Cookies from 'universal-cookie';
import Chat from './components/Chat';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config'

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'));
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  }

  if (!isAuth) {
    return (
      <>
        <Auth setIsAuth={setIsAuth} />
      </>
    )
  }

  return (

    <>
      {room ? (<div> <Chat room={room} /></div>) : (<div className='room'>
        <label> Enter room name</label>
        <input ref={roomInputRef} />
        <button onClick={() => setRoom(roomInputRef.current.value)}>
          enter chat
        </button>
      </div>
      )}

      <div className='sign-out'>
        <button onClick={signUserOut}>Sign Out</button>
      </div>


    </>

  );

}

export default App
