import './App.css';
import { Protagonist } from './caracters/protagonist';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Protagonist></Protagonist>
        <p>
          Testando o movimento de um personagem
        </p>
      </header>
    </div>
  );
}

export default App;
