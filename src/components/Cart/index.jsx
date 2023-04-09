import { Card } from "./Card";
import { CardTotal } from "./CardTotal";
import { StyledCart } from "./style";

export const Cart = ({ addCart, removeCart, setAddCart }) => {
  return (
    <StyledCart>
      <div className="containerHeader">
        <h1>Carrinho de compras</h1>
      </div>
      {addCart.length > 0 ? (
        <>
          {addCart.map((add) => (
            <Card add={add} key={add.id} removeCart={removeCart} />
          ))}
          <CardTotal addCart={addCart} setAddCart={setAddCart}/>
        </>
      ) : (
        <>
          <h1 className="CartVazio">Sua sacola está vazia </h1>
          <span className="paragVazio">Adicione itens</span>
        </>
      )}
    </StyledCart>
  );
};
