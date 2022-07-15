import React, { useState } from "react";
import { Card, CardBody } from "../../../components/Card";
import Text from "../../../components/Text";
import Button from "../../../components/Button/Button.component";
import { useHistory } from "react-router-dom";

const CurrentCard = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState({
    index: 0,
    isFlipped: false,
  });
  const { front, back } = cards[currentCard.index];
  const history = useHistory();

  const handleFlip = () => {
    setCurrentCard({
      index: currentCard.index,
      isFlipped: !currentCard.isFlipped,
    });
  };

  const handleNextCard = () => {
    if (currentCard.index < cards.length - 1) {
      setCurrentCard({ index: currentCard.index + 1, isFlipped: false });
    } else if (
      window.confirm("Would you like to restart from the start of the deck?")
    ) {
      setCurrentCard({ index: 0, isFlipped: false });
    } else {
      history.push("/");
    }
  };

  return (
    <Card>
      <CardBody>
        <Text.Heading level={4}>{`Card ${currentCard.index + 1} of ${
          cards?.length
        }`}</Text.Heading>
        <Text.Paragraph>{currentCard.isFlipped ? back : front}</Text.Paragraph>
        <Button className="mr-2" btnStyle="secondary" onClick={handleFlip}>
          Flip
        </Button>
        {currentCard.isFlipped && (
          <Button btnStyle="primary" onClick={handleNextCard}>
            Next
          </Button>
        )}
      </CardBody>
    </Card>
  );
};

export default CurrentCard;
