import { useEffect, useState } from "react";
import "./App.css";
import ButtonPage from "./components/ButtonPage";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(
    "https://rickandmortyapi.com/api/character/"
  );

  useEffect(() => {
    fetch(page)
      .then((res) => res.json())
      .then((res) => setCharacterList(res))
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <div className="App">
      <Characters characters={characterList} />
      <ButtonPage setPage={setPage} data={characterList} />
    </div>
  );
}

export default App;
