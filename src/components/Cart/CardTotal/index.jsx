import { DivStyled } from "./style";

export const CardTotal = ({ addCart, setAddCart }) => {
  const total = addCart.reduce((previewValue, value) => {
    return previewValue + value.price;
  }, 0);

  return (
    <DivStyled>
      <div>
        <p>Total:</p>
        <span>R$ {total.toFixed(2)}</span>
      </div>
      <button onClick={() => setAddCart([])}>Remover todos</button>
    </DivStyled>
  );
};
