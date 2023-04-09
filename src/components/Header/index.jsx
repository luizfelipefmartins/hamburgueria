import { HeaderContainer } from "./style"
import imgLogo  from "../../assets/BurguerKenzie.png"
import { useState } from "react"

export const Header = ({setInputValue}) => {

    const [filter, setFilter] = useState("")
   
    const submit = (e) => {
        e.preventDefault();
        setInputValue(filter)
    }


    return (
        <HeaderContainer>
            <img src={imgLogo} />
            <form onSubmit={submit}>
                <input placeholder="Digitar Pesquisa" type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
                <button type="submit">Pesquisar</button>
            </form>
        </HeaderContainer>
    )
}