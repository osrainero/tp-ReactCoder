import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {
  const greeting = "Hola Visitante!!"

  return (
    <>
      <h1>Productos Artesanales</h1>
      <div>
        <NavBar />
        <ItemListContainer mensaje= {greeting}  />
      </div>
    </>
  );
}

export default App;
