import "./styles.css";
import { Header } from "../../components/Header";
import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../enviroment/api";
import { UserContext } from "../../context/UserContext";

export const List = () => {
  const navigate = useNavigate();
  const { getUserLogin } = useContext(UserContext);
  const [ lista, setLista ] = useState([]);

  useEffect(() => {
    const user = getUserLogin();
    if (!user) return navigate("/");

    axios
      .get(`${baseUrl}/users`)
      .then((response) => setLista(response.data.users));
  }, []);

  const excluir = (idUsuario) =>{
    navigate('/delete',{
      state: {
        userId:idUsuario
      },
    })

  }
  const editar = (usuario) =>{
    navigate('/edit',{
      state:{
        user: usuario,
      },
    })
  }

  return (
    <>
      <Header />
      <main className="list">
        <table className="tabela">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Nível</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            
            {lista.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.login}</td>
                <td>{usuario.email}</td>
                <td>{usuario.nivel}</td>
                <td className="acoes">
                  <button onClick={() => excluir(usuario.id)} className="_btn">Excluir</button>
                  <button className="_btn" onClick={() => editar(usuario)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};
