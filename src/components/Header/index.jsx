import "./styles.css";
import {Link} from 'react-router-dom'
export const Header = () => {
  return (
    <>
      <div className="navBar">
        <header className="header">
          <h2>Sistema de Login</h2>
          <nav>
            <Link to="/home">Início</Link>
            <Link to="/list">Lista Usuários</Link>
            <Link to="/">logoff</Link>
          </nav>
        </header>
      </div>
    </>
  );
};
