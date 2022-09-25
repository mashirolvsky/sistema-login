import "./styles.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { baseUrl } from "../../enviroment/api";

export const Edit = () => {
  const navigate = useNavigate();
  const user = useLocation().state.user;
  const [login, setLogin] = useState(user.login);
  const [email, setEmail] = useState(user.email);
  const [senha, setSenha] = useState("");
  const [nivel, setNivel] = useState(user.nivel);

  const voltar = (event) => {
    navigate("/list");
  };
  const save = async (event) => {
    event.preventDefault();
    if (!login || !email || !senha) {
      return alert("Favor preencher todos os campos!");
    }

    await axios.put(`${baseUrl}/users/${user.id}`, {
      login: login,
      email: email,
      senha: senha,
      nivel: nivel,
    });
    navigate('/list')
  };

  return (
    <>
      <div className="edit">
        <h2>Atualizar Usuário</h2>
        <form className="create-form">
          <div className="form-group">
            <label>Login</label>
            <input
              type="text"
              onChange={(e) => {
                setLogin(e.target.value);
              }}
              value={login}
            />
          </div>
          <div className="form-group">
            <label>e-mail</label>
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              onChange={(e) => {
                setSenha(e.target.value);
              }}
              value={senha}
            />
          </div>
          <div className="form-group">
            <label>Nível</label>
            <select
              name=""
              id=""
              onChange={(e) => {
                setNivel(e.target.value);
              }}
              value={nivel}
            >
              <option value="Colaborador">Colaborador</option>
              <option value="Adminitrador">Administrador</option>
            </select>
          </div>
          <div className="edit_action">
            <button className="_btn" onClick={voltar}>
              Voltar
            </button>
            <button className="_btn" onClick={save}>
              Atualizar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
