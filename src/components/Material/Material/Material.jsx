import { Component } from "react";
import Modal from "../../Modal";
import { MaterialEditorForm } from "../MaterialEditorForm/MaterialEditorForm";

const EditMaterialModal = ({ onClose, onEdit }) => {
  return (
    <div>
      <h2>Edit material</h2>
      <button
        type="button"
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        Edit
      </button>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export class Material extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { item, onDelete, onUpdate } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <p>
          <b>Title:</b> {item.title}
        </p>
        <p>
          <b>Link:</b> {item.link}
        </p>
        <button type="button" onClick={() => onDelete(item.id)}>
          Delete
        </button>
        <button type="button" onClick={this.openModal}>
          Edit
        </button>

        {isModalOpen && (
          <EditMaterialModal
            onClose={this.closeModal}
            onEdit={() => onUpdate({ id: item.id, title: Date.now() })}
          />
        )}

        {/* {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <MaterialEditorForm />
            <EditMaterialModal
              onClose={this.closeModal}
              onClick={() => onUpdate({ id: item.id, title: Date.now() })}
            />
          </Modal>
        )} */}
        <hr />
      </>
    );
  }
}
