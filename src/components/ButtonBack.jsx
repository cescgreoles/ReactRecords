import { useNavigate } from "react-router-dom";
import "../styles/ButtonBack.scss";

const ButtonBack = () => {
  let navigate = useNavigate();
  return (
    <div className="container-button">
      <button onClick={() => navigate("/")} className="button">
        Back
      </button>
    </div>
  );
};

export default ButtonBack;
