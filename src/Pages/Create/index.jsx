import "./styles.css";
import { useState, useContext  } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import {baseUrl} from '../../enviroment/api'

export const Create = () => {
  const navigate = useNavigate();
  const { userLogSave } = useContext(UserContext);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nivel, setNivel] = useState("");

  const voltar = (event) => {
    event.preventDefault();
    navigate("/");
  };
  const cadastrar = async (event) => {
    event.preventDefault()
    if(!login|| !email || !senha){
      return alert('Favor preencher todos os Campos.')
    }


    try{
      await axios.post(`${baseUrl}/users`, {
        login:login,
        email:email,
        senha:senha,
        nivel:nivel,
      })
      userLogSave(login)
      navigate('/home')
    }catch(error){
      console.log(error)
      alert(error.response.data.message)
    }
  };
  return (
    <>
      <div className="create">
        <div>
          <span>Favor preencher todos os campos</span>
        </div>
        <h2>Cadastrar Usuário</h2>
        <form className="create-form">
          <div className="form-group">
            <label>Login</label>
            <input
              type="text"
              onChange={(e) => {
                setLogin(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>e-mail</label>
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              onChange={(e) => {
                setSenha(e.target.value);
              }}
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
            >
              <option value="0" disabled>
                Selecione uma opção
              </option>
              <option value="Colaborador">Colaborador</option>
              <option value="Administrador">Administrador</option>
            </select>
          </div>
          <div className="create_action">
            <button className="_btn" onClick={voltar}>
              Voltar
            </button>
            <button className="_btn" onClick={cadastrar}>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
