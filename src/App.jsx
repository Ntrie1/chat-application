import { useRef, useState } from 'react'
import './App.css'
import Auth from './components/Auth'
import Cookies from 'universal-cookie';
import Chat from './components/Chat';

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'));
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);

  if(!isAuth){
    return (
      <>
        <Auth setIsAuth={setIsAuth}/>
      </>
    )
  }

  return <div>{room ? <div> <Chat room={room} /></div> : <div className='room'> 
  <label> Enter room name</label>
  <input ref={roomInputRef} />
  <button onClick={() => setRoom(roomInputRef.current.value)}>enter chat</button>
  </div> }</div>
 
}

export default App
