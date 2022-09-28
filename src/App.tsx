import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/Global";

Modal.setAppElement("#root");

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionsModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionsModal = () => {
    setIsNewTransactionModalOpen(false);
  };

  return (
    <>
      <Header handleOpenNewTransactionsModal={handleOpenNewTransactionsModal} />
      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionsModal}
      >
        <h2>Olá Modal</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}