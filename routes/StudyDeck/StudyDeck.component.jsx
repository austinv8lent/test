import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.component";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Text from "../../components/Text";
import NoCardsToStudy from "./components/NoCardsToStudy.component";
import CurrentCard from "./components/CurrentCard.component";

const StudyDeck = () => {
  const [deck, setDeck] = useState([]);
  const { name, cards } = deck;
  const { deckId } = useParams();

  const crumbs = [
    { id: deckId, name, link: `/decks/${deckId}` },
    { id: "study", name: "Study" },
  ];

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    readDeck(deckId, signal).then((deck) => setDeck(deck));
  }, [deckId]);

  if (!cards || cards?.length < 3)
    return <NoCardsToStudy numOfCards={cards?.length} deckId={deckId} />;

  return (
    <>
      <Breadcrumb crumbs={crumbs} />
      <Text.Heading level={1}>Study: {name}</Text.Heading>
      <CurrentCard cards={cards} />
    </>
  );
};

export default StudyDeck;
