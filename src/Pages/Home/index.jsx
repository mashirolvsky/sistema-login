import { Header } from "../../components/Header";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect } from "react";
export const Home = () => {
  const navigate = useNavigate();
  const { getUserLogin } = useContext(UserContext);

  useEffect(() => {
    const user = getUserLogin();
    if (!user) navigate("/");
    
  },[]);
  return (
    <>
      <Header />
      <main className="home">
        <h1>
          Seja bem Vindo(a) <span>{getUserLogin()}</span>
        </h1>
      </main>
    </>
  );
};
