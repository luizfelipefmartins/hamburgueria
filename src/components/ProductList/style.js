import styled from "styled-components";

export const UlContainer = styled.ul`
    width: 100%;
    height: 24rem;
    padding: 0.5rem 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    overflow-x: scroll;

    @media (min-width: 1024px) {
        width: 100%;
        height: max-content;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-top: 2rem;
        margin-left: 5%;
        overflow: hidden;
        padding: 0;
        padding-left:1% ;
    }

    @media (min-width: 1200px) {
        margin-left: 8%;

    }

    @media (min-width: 1400px) {
        margin-left: 4%;
        grid-template-columns: repeat(3, 1fr);
    }
`

export const CondContainer = styled.div`
    display: flex;
    padding: 1rem;
    max-width: 43.5rem;

    p {
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--color-grey10);
    }

    p > strong {
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--color-grey3);
    }

    button {
        width: 20%;
        background: var(--color-primary);
        padding: 0.5rem 1rem;
        border: 2px solid var(--color-primary);
        color: var(--color-grey1) ;
        border-radius: 8px;
        visibility: hidden;
    }

    @media (min-width: 768px) {
        margin-left: 0.5rem;
        width: 100%;

        display: flex;
        justify-content: space-between;

        button {
            visibility: visible;
        }

    }

    @media (min-width: 1024px) {
        margin-left: 1rem;
        max-width: 42rem;


        button {
            width: 25%;
            cursor: pointer;
        }
    }

    @media (min-width: 1200px) {
        margin-left: 2.8rem;
    }

    @media (min-width: 1400px) {
        margin-left: 2rem;
        max-width: 70rem;

        button {
            width: auto;
        }
    }

`