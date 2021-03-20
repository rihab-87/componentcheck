
import call from "./dial.svg";
import email from "./message.svg";
import local from "./pin.svg";
import'./adress.css';
function adress() {
    return (
      <div className="adress_container" >
      <div className="adress"> <img src={local} alt="localisationicon"/> <span>Adress:</span>Sahloul,Sousse</div>
      <div className="adress">  <img src={email} alt="mailicon"/> <span>Email:</span>web.dev@gmail.com</div>
      <div className="adress">  <img src={call} alt="phoneicon"/> <span>phone:</span>73737377</div>
      </div>
    );
  }
  
  export default adress;
  