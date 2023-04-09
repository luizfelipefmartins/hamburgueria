import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    max-width: 63rem;
    height: 8.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-direction: column;
    background-color: var(--color-grey0);

    img {
        width: 150px;
        margin-top: 0.5rem;
    }

    form {
        width: 90%;
        height: 4rem;
        padding: 0.4rem 1rem;
        margin-bottom: 1rem;
        margin-right: 3%;
        gap: 1rem;
        display: flex;
        align-items: center;
        background-color: var(--color-grey1);
        border: 2px solid #E0E0E0;
        box-sizing: border-box;
    }

    form > input {
        width: 90%;
        height: 30px;
        padding-left: 0.5rem;
        font-size: 1rem;
        font-weight: 400;
        color: var(--color-grey3);
        outline: none;

    }

    form > input::placeholder{
        color: var(--color-grey2);
    }

    form > button {
        width: 5.9rem;
        height: 2.3rem;
        background-color: var(--color-primary);
        color: var(--color-grey0);
        font-size: 0.87rem;
        border: 2px solid #27AE60;
        border-radius: 8px;
        padding: 0.5rem 1rem;
        font-weight: 500;
        cursor: pointer;
    }

    @media (min-width: 1024px) {
        flex-direction: row ;
        justify-content: space-between;
        width: 100%;
        max-width: 1600px;

        form {
            width: 30%;
            margin-right: 5.5% ;
        }

        img {
            margin-left:2rem ;
        }
    }

    @media (min-width: 1200px) {
        
        img {
            margin-left:4rem ;
        }
    }

    @media (min-width: 1400px) {

        img {
            margin-left:3.5rem ;
        }

        form {
            margin-left: 10%;
            width: 25%;
            margin-right: 2.6% ;
        }
    }
`