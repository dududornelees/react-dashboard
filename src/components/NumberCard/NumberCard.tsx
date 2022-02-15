// Styles
import { NumberCardStyle } from "./styles";

// Interfaces
interface Props {
  title: string;
  number: string;
}

const NumberCard: React.FC<Props> = (props) => {
  return (
    <NumberCardStyle>
      <div className="number-card__title">
        <h3>{props.title}</h3>
      </div>

      <div className="number-card__number">
        <h3>{props.number}</h3>
      </div>
    </NumberCardStyle>
  );
};

export default NumberCard;
