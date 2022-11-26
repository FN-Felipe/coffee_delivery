import styled from 'styled-components'

export const ContainerContent = styled.div`
    padding-top: 4em;
    padding-left: 14em;
    padding-right: 14em;
    padding-bottom: 5em;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-family: 'Roboto', sans-serif;
`

export const SubContainerImage = styled.div`
    display: flex;
`

export const SubContainerContent = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: bolder;
        font-size: 48px;
        color: #C47F17;
        margin: 0;
    }

    p {
        font-size: 20px;
        color: #403937;
        margin: 0;
        margin-bottom: 3rem;
    }
`

export const ContainerInformations = styled.div`
    display: flex;
    flex-direction: column;
    padding: 36px;
    border-radius: 8px 36px;
    border: 1px solid #8047F8;
    width: 450px;
    gap: 2rem;
    //border-image: linear-gradient(90deg, #DBAC2C, #8047F8) 10;
`

export const InformationsRowLocal = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;

    p {
        color: #574F4D;
        font-size: 16px;
        height: 0px;
    }

    div {
        width: 50px;
        height: 40px;
        border-radius: 99999px;
        background: #8047F8;
        color: white;
        justify-content: center;
        align-items: center;
        display: flex;
    }
`

export const InformationsRowTime = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    p {
        color: #574F4D;
        font-size: 16px;
        height: 0px;
    }

    div {
        width: 40px;
        height: 40px;
        border-radius: 99999px;
        background: #DBAC2C;
        color: white;
        justify-content: center;
        align-items: center;
        display: flex;
    }
`

export const InformationsRowPay = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    p {
        color: #574F4D;
        font-size: 16px;
        height: 0px;
    }

    div {
        width: 40px;
        height: 40px;
        border-radius: 99999px;
        background: #C47F17;
        color: white;
        justify-content: center;
        align-items: center;
        display: flex;
    }
`
