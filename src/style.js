import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        justify-content: space-around;
        margin: 0 auto;
    }

`