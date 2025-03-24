import {auth} from '../firebaseConfig.js';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {FaUser, FaLock} from 'react-icons/fa';
import './login.css';
import './App.css';
// import { useState } from 'react';


// const LoginNormal = () =>{
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = () =>{
//         console.log("Envio de formulario");
//     }
//   };

function Login() {
  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    
    try {
     const result = await signInWithPopup(auth, provider);
        console.log("Usuario Logado:", result.user);
    }catch(error){
        console.error("Erro ao logar:", error);
    }
  };


  return (
    <div className="login-wrapper">
      <div className="container">
        <h2>Login</h2>
        <div className="input-field">
          <input type="email" placeholder="Email" />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input type="password" placeholder="*******" />
          <FaLock className="icon" />
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim?
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>
        
        <div className="button-container">
        <button className="login-btn">Entrar</button>
        <button onClick={loginGoogle} className="botgoogle">Entrar com o Google</button>
        </div>

        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registre-se</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;