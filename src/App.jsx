import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (

    <div className="App">

      <NavBar />
      <ItemListContainer texto='UC'/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Proyecto Under Club <code>src/App.js</code> Gonzalez Zoe
        </p>
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;