import logo from './logo.svg';
import './App.css';
import { Input } from './components/Input';
import {Todolists} from "./components/Todolists"
// import { DisplayProvider } from './context/Display';


function App() {
  return (
    <div className="App">
     <Input />
   
      <Todolists />
   
        
     
     
    </div>
  );
}

export default App;
