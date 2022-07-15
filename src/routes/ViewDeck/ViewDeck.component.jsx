import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { deleteCard, readDeck } from "../../utils/api";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.component";
import ViewDeckCard from "./components/ViewDeckCard/ViewDeckCard.component";
import CardList from "./components/CardList/CardList.component";

const ViewDeck = () => {
  const [deck, setDeck] = React.useState([]);
  const { name, cards } = deck;
  const { deckId: id } = useParams();
  const crumbs = [{ id, name }];

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    readDeck(id, signal).then((deck) => setDeck(deck));
    return () => controller.abort();
  }, [id]);

  const handleCardDelete = (cardId) => {
    const controller = new AbortController();
    const signal = controller.signal;
    deleteCard(cardId, signal).then(() => {
      setDeck((deck) => {
        return {
          ...deck,
          cards: deck.cards.filter((card) => card.id !== cardId),
        };
      });
    });
  };

  return (
    <>
      <Breadcrumb crumbs={crumbs} />
      <ViewDeckCard {...deck} />
      <CardList cards={cards} onDelete={handleCardDelete} />
    </>
  );
};

export default ViewDeck;
