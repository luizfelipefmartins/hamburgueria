import styled  from "styled-components";

export const StyledCart = styled.aside`
    width: 86%;
    max-width: 19rem;
    margin-left: 1rem;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    background-color: var(--color-grey0);

    .containerHeader {
        width: 100%;
        height: 4.06rem;
        box-sizing: border-box;
        padding: 1rem;
        background-color: var(--color-primary);
        border-radius: 5px 5px 0px 0px;
        font-size: 1.12rem;
        font-weight: 700;
        color: var(--color-grey1);
    }

    .CartVazio {
        text-align: center;
        margin-top: 2rem;
    }

    .paragVazio {
        color: var(--color-grey3);
        font-size: 0.87rem;
        text-align: center;
        margin-bottom: 2rem;
    }

    @media (min-width: 1024px){
        width: 95%;
        height: max-content;
        justify-content: flex-start;
        margin-top: 5%;
        margin-left: 20%;
        margin-right: 1%;
    }

    @media (min-width: 1200px) {
        margin-left: 18%;
        max-width: 23rem;
    }

    @media (min-width: 1400px) {
        margin-left: 22%;
    }

`