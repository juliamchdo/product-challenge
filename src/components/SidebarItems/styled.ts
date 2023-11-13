import { styled } from "styled-components";

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.375rem;
`

export const ItemCard = styled.div`
    background-color: #fff;
    border-radius: .5rem;
    height: 5.9375rem;
    width: 23.6875rem;

    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
        width: 45px;
        height: 45px
    }

    @media screen and (max-width: 420px){
        width: 20rem;
    }

`