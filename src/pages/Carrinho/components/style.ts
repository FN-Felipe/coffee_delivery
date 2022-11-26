import styled from 'styled-components'

export const MiniContainerCafeStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    height: 80px;
    width: 100%;
    font-family: 'Roboto', sans-serif;

    :last-child {
        border-bottom: solid 1px red;
    }
`

export const ContainerCafeImage = styled.div`
    img {
        width: 80px;
    }
`

export const ContainerTitleAndButton = styled.div`
    margin-top: -0.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
        font-size: 16px;
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
    font-size: 12px;
    color: #272221;
`

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
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

export const ButtonRemove = styled.button`
    font-family: 'Roboto', sans-serif;
    border: none;
    border-radius: 6px;
    color: #8047F8;
    background: #E6E5E5;
    width: 100px;
    height: 38px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    p {
        font-size: 12px;
        color: #574F4D;
    }

    :hover {
      color: #4B2995
    }
`

export const Price = styled.div`
    margin-top: -0.8rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    display: flex;
    color: #574F4D;
    width: 100px;
    justify-content: right;
`
    