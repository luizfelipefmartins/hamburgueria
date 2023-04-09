import styled from "styled-components";

export const LiContainer = styled.li`
    width: 225px;
    min-width: 220px;
    height: 335px;
    border: 2px solid var(--color-grey2);
    border-radius: 5px;
    box-sizing: border-box;

    img {
        width: 100%;
        height: 50%;
        object-fit: contain;
        background-color: var(--color-grey0);
    }

    div {
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 1rem;
        gap: 0.5rem;
        background-color: var(--color-grey1);
        box-sizing: border-box;
    }

    div > h3 {
        font-weight: 700;
        font-size: 1.12rem;
    }

    div > span {
        font-size: 0.75rem;
        color: var(--color-grey3);
    }

    div > p {
        font-weight: 600;
        font-size: 0.87rem;
        color: var(--color-primary);
    }

    div > button {
        width: 5.9rem;
        background-color: var(--color-primary);
        color: var(--color-grey0);
        font-size: 0.87rem;
        padding: 0.5rem 1rem;
        border: 2px solid #27AE60;
        border-radius: 8px;
    }

    @media (min-width: 1024px){
        min-width: 17rem;
    }

    @media (min-width: 1200px){
        width: 20rem;
    }
`