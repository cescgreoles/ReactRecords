import { useNavigate } from "react-router-dom";
import "../styles/ButtonBack.scss";

const ButtonBack = () => {
  let navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
};

export default ButtonBack;
