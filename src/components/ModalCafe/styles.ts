import styled from 'styled-components'

export const BoxCafe = styled.div`
    width: 256px;
    height: 310px;
    background: #F3F2F2;
    border-radius: 6px 36px;
    justify-content: center;
    align-items: center;
    text-align: center;
    img {
        margin-top: -2rem;
    }
`

export const TagDescription = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    h5 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-right: 6px;
        padding-left: 6px;
        height: 21px;
        background: #F1E9C9;
        color: #C47F17;
        font-size: 10px;
        font-family: 'Roboto', sans-serif;
        border-radius: 100px;
        flex: none;
        order: 0;
        flex-grow: 0;
        text-transform: uppercase;
    }
`

export const Description = styled.div`
    padding-left: 1.5em;
    padding-right: 1.5rem;
    text-align: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    p {
        font-size: 12px;
        color: #8D8686;
    }
    h3 {
        color: #403937;
    }
`

export const DetailsCenter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`


export const Price = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    color: #574F4D;
    h3 {
        margin-left: 0.1rem;
    }
    
    h6 {
        
    }
`

export const Count = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 72px;
    height: 38px;
    background: #E6E5E5;
    border-radius: 6px;
    flex: none;
    order: 0;
    flex-grow: 0;
    font-family: 'Roboto', sans-serif;
    color: #272221;
`

export const ButtonPlusMinus = styled.button`
    color: #8047f8;
    border: none;
    background: transparent;
    cursor: pointer;

    :hover {
      color: #4B2995
    }
`

export const ButtonCar = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;
    width: 38px;
    height: 38px;
    background: #4B2995;
    border-radius: 6px;
    border: none;
    color: #FFFFFF;
    flex: none;
    order: 1;
    flex-grow: 0;
    cursor: pointer;

    :hover {
      background: #8047F8;
    }
`
