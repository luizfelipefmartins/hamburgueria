import styled from "styled-components";

export const DivStyled = styled.div`
    width: 15rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div {
        display: flex;
        justify-content: space-between;
    }

    div > p {
        font-weight: 600;
        font-size: 0.875rem;
        color: var(--color-grey10);
    }

    div > span {
        font-weight: 600;
        font-size: 0.875rem;
        color: var(--color-grey4);
    }

    button {
        width: 100%;
        padding: 0.5rem 1rem; 
        color: var(--color-grey3);
        background-color: var(--color-grey2);
        border: 2px solid var(--color-grey2);
        border-radius: 0.5rem;
        font-size: 0.87rem;
        font-weight: 600;
    }

`