import { LiContainer } from "./style"

export const ListCard = ({prod , addToCart}) => {
    return (
        <LiContainer>
            <img src={prod.img} alt={prod.name}/>
            <div>
                <h3>{prod.name}</h3>
                <span>{prod.category}</span>
                <p>R$ {prod.price}</p>
                <button onClick={() => addToCart(prod)}>Adicionar</button>
            </div>
        </LiContainer>
    )
}