import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export const TransactionsTable = () => {
  const { transactions } = useTransactions();

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
          {transactions.map(({ id, title, type, category, amount, createdAt }) => (
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
                new Date(createdAt)
              )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}