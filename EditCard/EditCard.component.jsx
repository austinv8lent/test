import React, { useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.component";
import Text from "../../components/Text";
import { useHistory, useParams } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../../utils/api";
import formInputs from "../../configs/cardInputs.config";
import Form from "../../components/Form/Form.component";

const EditCard = () => {
  const [card, setCard] = React.useState({});
  const [deck, setDeck] = React.useState({});
  const history = useHistory();
  const { deckId, cardId } = useParams();
  const crumbs = [
    { id: deckId, name: deck?.name, link: `/decks/${deckId}` },
    { id: "editCard", name: "Edit Card" },
  ];

  useEffect(() => {
    if (!deckId) return;
    const controller = new AbortController();
    const signal = controller.signal;
    readDeck(deckId, signal).then((deck) => setDeck(deck));
    return () => controller.abort();
  }, [deckId]);

  useEffect(() => {
    if (!cardId) return;
    const controller = new AbortController();
    const signal = controller.signal;
    readCard(cardId, signal).then((card) => setCard(card));
  }, [cardId]);

  const handleSubmit = (event, card) => {
    event.preventDefault();

    const controller = new AbortController();
    const signal = controller.signal;
    updateCard({ ...card }, signal).then(() =>
      history.push(`/decks/${deckId}`)
    );
  };

  const handleCancel = () => {
    history.push(`/decks/${deckId}`);
  };

  return (
    <>
      <Breadcrumb crumbs={crumbs} />
      <Text.Heading level={2}>Edit Card</Text.Heading>
      <Form
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        formInputs={formInputs}
        prevData={card}
      />
    </>
  );
};

export default EditCard;
