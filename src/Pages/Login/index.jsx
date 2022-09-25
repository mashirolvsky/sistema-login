import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../enviroment/api";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import LoginLeft from "../../assets/LoginLeft.svg";
import Logo from "../../assets/Logo.svg";
import "./styles.css";

export const Login = () => {
  const navigate = useNavigate();
  const { userLogSave, removeUserLogin } = useContext(UserContext);
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [invalido, setInvalido] = useState(false);

  useEffect(() => removeUserLogin(), []);
  const submit = async (event) => {
    event.preventDefault();
    if (!login || !senha) {
      return setInvalido(true);
    }

    try {
      const resposta = await axios.post(`${baseUrl}/verificarlogin`, {
        login: login,
        senha: senha,
      });
      userLogSave(login);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setInvalido(true);
    }
  };

  return (
    <>
      <main className="login">
        <div className="login_left">
          <img src={LoginLeft} alt="" />
        </div>
        <div className="login_right">
          <img src={Logo} alt="" />
          <form onSubmit={submit} className="login_form">
            <div className="login_form_info">
              <h2>Login</h2>
              <p>
                Não tem uma conta? <Link to="/create">Teste grátis</Link>
              </p>
              {invalido == true && (
                <p className="error">Usuário / Senha inválido</p>
              )}
            </div>
            <label>Login</label>
            <div className="form-group">
              <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Seu login"
              />
            </div>
            <label>Senha</label>
            <div className="form-group">
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Sua senha"
              />
            </div>
            <div className="login_form_action">
              <input type="submit" className="_btn" value="Entrar" />
              <p>Esqueceu a senha?</p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
