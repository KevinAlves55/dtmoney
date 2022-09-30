import { createContext, useEffect, useState } from "react";
import { Api } from "./services/Api";

interface Transactions {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAd: string;
}

export const TransactionsContext = createContext<Transactions[]>([]);

interface ITransactionsProviderProps {
  children: React.ReactNode;
}

export const TransactionsProvider: React.FC<ITransactionsProviderProps> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    Api.get("/transactions")
      .then(response => setTransactions(response.data.transactions))
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}