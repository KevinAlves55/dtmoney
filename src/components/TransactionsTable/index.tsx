import { useEffect, useState } from "react";
import { Api } from "../../services/Api";
import { Container } from "./styles";

interface Transactions {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAd: string;
}

export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    Api.get("/transactions")
      .then(response => setTransactions(response.data.transactions))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(({ id, title, type, category, amount, createdAd }) => (
            <tr key={id}>
              <td>{title}</td>
              <td className={type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                }).format(amount)}
              </td>
              <td>{category}</td>
              <td>{new Intl.DateTimeFormat("pt-BR").format(
                new Date(createdAd)
              )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}