import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const DeckLoader = (props) => {
  const [ savedDecks, setSavedDecks ] = useState({});
  useEffect(() => {
    const saved = localStorage.getItem("savedDecks");
    if (saved) {
      setSavedDecks(saved);
    }
  }, []);

  return (<>
    <button onClick={() => {

    }}>Save Deck</button>
    <button>Load Last Deck</button>
  </>);
};

export default DeckLoader;
