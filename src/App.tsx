import "./App.css";
import PokemonDetails from "./components/Details/PokemonDetails";
import PokemonList from "./components/List/PokemonList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/details/:name" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
