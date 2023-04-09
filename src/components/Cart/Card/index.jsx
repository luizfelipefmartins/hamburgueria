import { CardStyle } from "./style";

export const Card = ({ add, removeCart}) => {
  return (
    <CardStyle>
      <img src={add.img} alt={add.name} />
      <div>
        <h1>{add.name}</h1>
        <span>{add.category}</span>
      </div>
      <button onClick={() => removeCart(add.id)}>Remover</button>
    </CardStyle>
  );
};
