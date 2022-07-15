import React from "react";
import { Card, CardBody } from "../../../../components/Card";
import Text from "../../../../components/Text";
import DeckCardActions from "./DeckCardActions.component";
import DeckCardHeader from "./DeckCardHeader.component";

const DeckCard = ({ id, description, name, cards, onDelete }) => {
  return (
    <Card className="my-4 p-4">
      <DeckCardHeader name={name} numOfCards={cards.length} />
      <CardBody className="p-0">
        <Text.Paragraph>{description}</Text.Paragraph>
        <DeckCardActions id={id} onDelete={onDelete} />
      </CardBody>
    </Card>
  );
};

export default DeckCard;
