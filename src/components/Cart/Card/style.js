import styled from "styled-components";


export const CardStyle = styled.div`
    width: 15rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    box-sizing: border-box;
    background-color: var(--color-grey0);

    img {
        width: 60px;
        height: 60px;
        background-color: var( --color-grey2);
        object-fit: cover;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 0.1rem;
    }

    div > h1 {
        font-size: 0.875rem;
        font-weight: 700;
        text-align: start;
    }

    div > span {
        font-size: 0.75rem;
        color: var(--color-grey3);
    }

    button {
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--color-grey4);
        align-self: flex-start;
        margin-top: 0.1rem;
    }

    @media (min-width: 1200px){
        width: 20rem;
    }


`