import './App.css';
// import pic from './logo192.png'
import { Form } from './Components/Form';
import { Context, Provider } from './Context/Context';
import { NavBar } from './Components/NavBar';
import { useContext } from 'react';
import { Modify } from './Components/Modify';

function App() {
  let { getPag } = useContext(Context);
  let Mostrar = {
    Load:<Form />,
    Mod: <Modify/>
  }
  return (
    <>
      <header>
        <h1> Cachitosbakery Products Loader</h1>
      </header>
      <NavBar/>
      {Mostrar[getPag]}
      {/* <Form/> */}
    </>
  );
}

export default App;
