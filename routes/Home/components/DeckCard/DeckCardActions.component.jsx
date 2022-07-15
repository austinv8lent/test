import React from "react";
import Button from "../../../../components/Button/Button.component";
import { FaBook, FaRegEye, FaTrashAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const DeckCardActions = ({ id, onDelete }) => {
  const history = useHistory();

  const handleView = () => {
    history.push(`/decks/${id}`);
  };

  const handleStudy = () => {
    history.push(`/decks/${id}/study`);
  };

  return (
    <div className="container">
      <div className="row justify-content-between">
        <div>
          <Button
            className="mr-2"
            btnStyle="secondary"
            icon={FaRegEye}
            onClick={handleView}
          >
            View
          </Button>
          <Button btnStyle="primary" icon={FaBook} onClick={handleStudy}>
            Study
          </Button>
        </div>
        <Button btnStyle="danger" icon={FaTrashAlt} onClick={onDelete} />
      </div>
    </div>
  );
};

export default DeckCardActions;
