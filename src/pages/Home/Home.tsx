import NumberCard from "components/NumberCard/NumberCard";

// Styles
import { HomeStyle } from "./styles";

const Home: React.FC = () => {
  return (
    <HomeStyle>
      <NumberCard title="Pontos" number="1124" />
      <NumberCard title="Clientes" number="569" />
      <NumberCard title="Agendamentos" number="56" />
      <NumberCard title="Pontos" number="891" />
      <NumberCard title="Agendamentos" number="56" />
      <NumberCard title="Clientes" number="569" />
    </HomeStyle>
  );
};

export default Home;
