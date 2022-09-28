import Modal from "react-modal";

interface INewTransactionModalProps {
  isOpen: boolean;
  handleCloseNewTransactionsModal: () => void;
}

export const NewTransactionModal: React.FC<INewTransactionModalProps> = ({ handleCloseNewTransactionsModal, isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseNewTransactionsModal}
    >
      <h2>Olá Modal</h2>
    </Modal>
  );
};