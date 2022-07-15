import React, { useEffect } from "react";
import Text from "../../components/Text";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.component";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api";
import Form from "../../components/Form/Form.component";
import formInputs from "../../configs/deckInputs.config";

const EditDeck = () => {
  const [deck, setDeck] = React.useState({});
  const history = useHistory();
  const { deckId: id } = useParams();
  const crumbs = [
    { id, name: deck.name, link: `/decks/${id}` },
    { id: "edit", name: "Edit" },
  ];

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    readDeck(id, signal).then((deck) => setDeck(deck));
    return () => controller.abort();
  }, [id]);

  const handleSubmit = (event, deck) => {
    event.preventDefault();

    const controller = new AbortController();
    const signal = controller.signal;
    updateDeck({ ...deck }, signal).then(() => history.push("/"));
  };

  const handleCancel = () => {
    history.push("/");
  };

  return (
    <>
      <Breadcrumb crumbs={crumbs} />
      <Text.Heading level={2}>Edit Deck</Text.Heading>
      <Form
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        prevData={deck}
        formInputs={formInputs}
      />
    </>
  );
};

export default EditDeck;
