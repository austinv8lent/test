import React, { useEffect } from "react";
import Text from "../../components/Text";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.component";
import { useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
import Form from "../../components/Form/Form.component";
import formInputs from "../../configs/cardInputs.config";

const NewCard = () => {
  const [deck, setDeck] = React.useState(null);
  const { deckId } = useParams();
  const history = useHistory();
  const crumbs = [
    { id: deckId, name: deck?.name, link: `/decks/${deckId}` },
    { id: "addCard", name: "Add Card" },
  ];

  useEffect(() => {
    if (!deckId) return;
    const controller = new AbortController();
    const signal = controller.signal;
    readDeck(deckId, signal).then((deck) => setDeck(deck));
    return () => controller.abort();
  }, [deckId]);

  const handleSubmit = (event, card) => {
    event.preventDefault();

    const controller = new AbortController();
    const signal = controller.signal;
    createCard(deckId, { ...card }, signal).then(() =>
      history.push(`/decks/${deckId}`)
    );
  };

  const handleCancel = () => {
    history.push(`/decks/${deckId}`);
  };

  return (
    <>
      <Breadcrumb crumbs={crumbs} />
      <Text.Heading level={2}>{deck?.name}: Add Card</Text.Heading>
      <Form
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        formInputs={formInputs}
      />
    </>
  );
};

export default NewCard;
