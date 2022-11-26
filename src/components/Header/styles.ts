import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 2rem;
    padding-left: 10rem;
    padding-right: 10rem;
    justify-content: space-between;
`

export const ButtonHeaderLocal = styled.div`
    background: #EBE5F9;
    width: 143px;
    height: 38px;
    border-radius: 4px;
    border: none;
    color: #8047F8;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
`
export const ButtonHeaderCar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 38px;
    height: 38px;
    background: #F1E9C9;
    border-radius: 6px;
    flex: none;
    order: 1;
    flex-grow: 0;
    color: #C47F17;
    margin-left: 0.75rem;
`

export const Alinhamento = styled.div`
    display: flex;
    align-items: center;
`
