import React from "react";
import Button from "../../components/Button/Button.component";
import { FaPlus } from "react-icons/fa";
import DeckList from "./components/DeckList/DeckList.component";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const handleNewDeck = () => {
    history.push("/decks/new");
  };

  return (
    <div>
      <Button btnStyle="secondary" icon={FaPlus} onClick={handleNewDeck}>
        Create Deck
      </Button>
      <DeckList />
    </div>
  );
};

export default Home;
