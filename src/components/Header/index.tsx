import logoImg from "../../assets/logo.svg"
import { Container, Content } from "./styles";

interface IHeaderProps {
  handleOpenNewTransactionsModal: () => void;
}

export const Header: React.FC<IHeaderProps> = ({ handleOpenNewTransactionsModal }) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleOpenNewTransactionsModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};