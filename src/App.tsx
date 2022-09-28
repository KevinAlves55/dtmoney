import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/Global";

Modal.setAppElement("#root");

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(true);

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
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionsModal}
      />
      <GlobalStyle />
    </>
  );
}