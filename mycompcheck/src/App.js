
import './App.css';
import Profilephoto from './component/profil/profilephoto';
import Name from './component/profil/name';
import Adress from './component/profil/adress';
import View from './component/profil/view';
import {Button} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <div className="profile">
     < Profilephoto/>
     < Name/>
     < Adress/>
     <View/>
     </div>
    </div>
  );
}

export default App;
