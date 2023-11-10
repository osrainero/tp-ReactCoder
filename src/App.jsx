import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Greeting from './components/Greeting/Greeting.jsx';
import CardContainer from './components/CardContainer/CardContainer.jsx';
import Card from './components/Card/Card.jsx';

function App() {
  const greeting = "Hola Visitante!!"

  return (
    <>
      <h1>Productos Artesanales</h1>
      <div>
        <NavBar />
        <ItemListContainer mensaje= {greeting}  />
        <Greeting />
        <CardContainer>
          <Card/>
        </CardContainer>
      </div>
    </>
  );
}

export default App;
