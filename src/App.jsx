import Login from './Login';
import Logout from './Logout';
import { auth } from '../firebaseConfig';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
   auth.onAuthStateChanged(setUser)
  }, []);

  return (
   <>
   <div className='App'>
      {user ? <Logout user={user} /> : <Login />}
    </div>
    </>
  );

}

export default App
