import './App.css';
// import pic from './logo192.png'
import { Form } from './Components/Form';
import { Provider } from './Context/Context';

function App() {

  return (
    <Provider>
      <header>
        <h1> Cachitosbakery Products Loader</h1>
      </header>
      <Form/>
    </Provider>
  );
}

export default App;
