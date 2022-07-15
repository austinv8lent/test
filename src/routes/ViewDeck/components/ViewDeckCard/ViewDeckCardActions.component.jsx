import React from "react";
import Button from "../../../../components/Button/Button.component";
import { FaBook, FaPen, FaPlus, FaTrashAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../../../../utils/api";

const ViewDeckCardActions = ({ id }) => {
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/decks/${id}/edit`);
  };
  const handleStudy = () => {
    history.push(`/decks/${id}/study`);
  };
  const handleAddCards = () => {
    history.push(`/decks/${id}/cards/new`);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this deck?")) {
      const controller = new AbortController();
      const signal = controller.signal;
      deleteDeck(id, signal).then(() => history.push("/"));
    }
  };

  return (
    <div className="d-flex justify-content-between mb-5">
      <div className="d-flex d-row justify-content-start flex-fill">
        <Button
          className="mr-2"
          btnStyle="secondary"
          icon={FaPen}
          onClick={handleEdit}
        >
          Edit
        </Button>
        <Button
          className="mr-2"
          btnStyle="primary"
          icon={FaBook}
          onClick={handleStudy}
        >
          Study
        </Button>
        <Button btnStyle="primary" icon={FaPlus} onClick={handleAddCards}>
          Add Cards
        </Button>
      </div>
      <Button
        className="flex-shrink-1"
        btnStyle="danger"
        icon={FaTrashAlt}
        onClick={handleDelete}
      />
    </div>
  );
};

export default ViewDeckCardActions;
