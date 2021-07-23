import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { compress, decompress } from "../lib/hashurl";
import { setColumns } from "../redux/actions";

const saveDeck = (name, columns, setSavedDecks) => {
  let decks = localStorage.getItem("savedDecks");
  if (!decks) {
    decks = "[]";
  }
  const parsed = JSON.parse(decks);
  compress(columns).then(s => {
    parsed.push({
      id: uuidv4(),
      name: name,
      content: s
    });
    setSavedDecks(parsed);
    localStorage.setItem("savedDecks", JSON.stringify(parsed));
  });
};

const DeckLoader = (props) => {
  const [ savedDecks, setSavedDecks ] = useState([]);
  const [ confirmSave, setConfirmSave ] = useState(false);
  const [ saveName, setSaveName ] = useState((new Date()).toLocaleString());
  const columnDefs = useSelector((state) => state.columnDefs);

  useEffect(() => {
    const saved = localStorage.getItem("savedDecks");
    if (saved) {
      setSavedDecks(JSON.parse(saved));
    }
  }, []);

  return (<>
    <div>
      {confirmSave && <input
        type="text"
        placeholder="Name"
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            e.preventDefault();
            saveDeck(saveName, columnDefs, setSavedDecks);
            setConfirmSave(false);
          } else {
            setSaveName(e.target.value || (new Date()).toLocaleString());
          }
        }}/>}
      <button onClick={() => {
        if (!confirmSave) {
          setConfirmSave(true);
        } else {
          saveDeck(saveName, columnDefs, setSavedDecks);
          setConfirmSave(false);
        }
      }}>Save{!confirmSave && " Deck"}</button>
    <ul className="plainlist marginZero">
      {
        savedDecks.map((deck) => (
          <li key={deck.id}>
            <button onClick={() => decompress(deck.content).then(c => setColumns(c))}>Load: {deck.name}</button>
            <button className="floatRight" onClick={() => {
              const s = savedDecks.filter(d => d.id !== deck.id)
              setSavedDecks(s)
              localStorage.setItem("savedDecks", JSON.stringify(s));
            }}>x</button>
          </li>
        ))
      }
    </ul>
    </div>
  </>);
};

export default DeckLoader;
