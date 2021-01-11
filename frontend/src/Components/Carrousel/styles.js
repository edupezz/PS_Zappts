import styled from 'styled-components';

export const CarouselContainer = styled.div`

    width: 50vw;
    display: flex;
    padding: 12vh;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #A9C5BA;

    p{
        margin-top: 3vh;
        font-size: 1.2rem;
        color: #fff;
        text-align: center;
    }

    p:last-child  {
            font-size: 0.9rem;
            width: 25vw;
            text-align: center;
        }

    .rec.rec-arrow {
        display: none;
    }

    img {
        width: 100%;
    }

    button {
        background-color: #fff;
    }

    @media(max-width: 800px){
        width: 100vw;
        padding: 0;
        min-height: 100vh;

        img{
            width: 60%;
            margin-top: 2vh;
        }

        p{
        margin-top: 2vh;
    }

        p:last-child{
            width: 45vw;
        }
    }

`
