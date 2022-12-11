import { useNavigate } from "react-router-dom";
import not from "../../assets/svg/error404.gif";
import { Container } from "./styles";

import { BsArrowLeft } from "react-icons/bs";

const NotFound = () => {

  const navigate = useNavigate();

  function handleComeBackHome() {
    navigate("/");
  }

  return (
    <Container >
      <button onClick={handleComeBackHome}>
        <BsArrowLeft size={20} />
        Voltar
      </button>
      <img src={not} alt="Error 404" />
    </Container>
  );
};


export default NotFound;