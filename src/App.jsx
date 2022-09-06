import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (

    <div className="App">

      <NavBar />
      <ItemListContainer texto='UNDERCLUB'/>
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;