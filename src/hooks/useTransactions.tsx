import { createContext, useContext, useEffect, useState } from "react";
import { Api } from "../services/Api";

interface Transactions {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface ITransactionsProviderProps {
  children: React.ReactNode;
}

interface TransactionsContextData {
  transactions: Transactions[];
  createTransaction: (transactionInput: Omit<Transactions, "id" | "createdAt">) => Promise<void>;
}

const TransactionsContext = createContext({} as TransactionsContextData);

export const TransactionsProvider: React.FC<ITransactionsProviderProps> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    Api.get("/transactions")
      .then(response => setTransactions(response.data.transactions))
  }, []);

  const createTransaction = async (transactionInput: Omit<Transactions, "id" | "createdAt">) => {
    const response = await Api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ]);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export const useTransactions = () => {
  const context = useContext(TransactionsContext);

  return context;
}