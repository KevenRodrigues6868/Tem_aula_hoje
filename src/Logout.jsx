import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { FaBars, FaChalkboardTeacher, FaSignOutAlt } from "react-icons/fa";
import "./Logout.css";

function Logout({ user }) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Menu dropdown */}
        <div className="menu">
          <button className="menu-button" onClick={() => setMenuAberto(!menuAberto)}>
            <FaBars /> Menu
          </button>
          {menuAberto && (
            <div className="dropdown-menu">
              <button className="menu-item">
                <FaChalkboardTeacher /> Cadastrar Aulas
              </button>
              <button className="menu-item">
                <FaChalkboardTeacher /> Ver Aulas Cadastradas
              </button>
            </div>
          )}
        </div>

        {/* Botão de sair na base da sidebar */}
        <button className="logout-button" onClick={() => signOut(auth)}>
          <FaSignOutAlt /> Sair
        </button>
      </div>

      {/* Conteúdo principal */}
      <div className="content">
        <h2>Olá, {user.displayName}</h2>
        <p>Bem-vindo ao painel de aulas!</p>
      </div>
    </div>
  );
}

export default Logout;
