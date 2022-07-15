import React, { useEffect } from "react";
import DeckCard from "../DeckCard/DeckCard.component";
import { deleteDeck, listDecks } from "../../../../utils/api";

const DeckList = () => {
  const [deckList, setDeckList] = React.useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    listDecks(signal).then((decks) => setDeckList(decks));
    return () => controller.abort();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this deck?")) {
      const controller = new AbortController();
      const signal = controller.signal;
      deleteDeck(id, signal).then(() =>
        setDeckList(deckList.filter((deck) => deck.id !== id))
      );
    }
  };

  return (
    <>
      {deckList.map(({ id, ...deck }) => (
        <DeckCard
          key={id}
          id={id}
          onDelete={() => handleDelete(id)}
          {...deck}
        />
      ))}
    </>
  );
};

export default DeckList;
