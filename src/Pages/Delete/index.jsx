import "./styles.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { baseUrl } from "../../enviroment/api";

export const Delete = () => {
  const navigate = useNavigate();
  const idUsuario = useLocation().state.userId;

  const voltar = () => {
    navigate(-1);
  };
  const deletarUser = async () => {
    await axios.delete(`${baseUrl}/users/${idUsuario}`);
    navigate("/list");
  };

  return (
    <>
      <div className="delete">
        <h1>Você tem certeza que Deseja Excluir este Usuário?</h1>
        <h3>*esta ação é permanente!</h3>
        <div className="delete_action">
          <button className="_btn" onClick={voltar}>
            Voltar
          </button>
          <button className="_btn" onClick={deletarUser}>
            Deletar
          </button>
        </div>
      </div>
    </>
  );
};
