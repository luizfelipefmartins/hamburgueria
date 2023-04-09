import { UlContainer } from "./style"
import { CondContainer } from "./style"
import { ListCard } from "./ListCard"

export const ProductList = ({product , addToCart, filterProducts, inputValue, setInputValue}) => {
    const currentProduct = inputValue !== "" ? filterProducts : product

    return (
        <div>
            {inputValue 
            ? 
               <CondContainer>
                <p>Resultados para: <strong>{inputValue}</strong></p>
                <button onClick={() => setInputValue("")}>Limpar busca</button>
               </CondContainer> 
            : null}
               
            <UlContainer>
                {currentProduct.map(prod => (
                    <ListCard key={prod.id} prod={prod} addToCart={addToCart}/>
                ))}
            </UlContainer>
        </div>
    )
}