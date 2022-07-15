import React from "react";
import Text from "../../../../components/Text";
import ListGroupItem from "../../../../components/ListGroup/ListGroupItem.component";
import Button from "../../../../components/Button/Button.component";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const CardListItem = ({ deckId, id, front, back, onDelete }) => {
  const history = useHistory();

  const handleCardEdit = () => {
    history.push(`/decks/${deckId}/cards/${id}/edit`);
  };

  return (
    <ListGroupItem key={id}>
      <div className="container">
        <div className="row">
          <div className="col">
            <Text.Paragraph>{front}</Text.Paragraph>
          </div>
          <div className="col">
            <Text.Paragraph>{back}</Text.Paragraph>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-end">
            <Button
              className="mr-2"
              btnStyle="secondary"
              icon={FaPen}
              onClick={handleCardEdit}
            >
              Edit
            </Button>
            <Button
              btnStyle="danger"
              icon={FaTrashAlt}
              onClick={() => onDelete(id)}
            />
          </div>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CardListItem;
