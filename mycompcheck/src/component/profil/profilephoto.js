

import webb from "./web.jpg";
import webtech from "./webtech.png";
import'./profilephoto.css';
function profilephoto() {
    return (
      <div className="img_container" >
        <div className="img_profile">
      <img src={webtech} alt="webpage"  />
      </div>
      </div>
    );
  }
  
  export default profilephoto;
  