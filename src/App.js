// import './App.css';
// import pic from './logo192.png'
import { Button } from './Components/Button';
import { Picture } from './Components/Picture';
import { Form } from './Components/Form';
import { Provider } from './Context/Context';

function App() {

  return (
    <Provider>
      <Form/>
    </Provider>
  );
}

export default App;
