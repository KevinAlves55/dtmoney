import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export const TransactionsTable = () => {
  const transactions = useContext(TransactionsContext);

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