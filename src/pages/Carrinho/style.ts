import styled from 'styled-components'

export const ContentPage = styled.div`
    padding-left: 18rem;
    padding-right: 18rem;
    padding-top: 2.5rem;
    height: 80vh;
    display: flex;
    flex-direction: row;
    gap: 2rem;
`

export const GeralEndePag = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    width: 40rem;
    gap: 1rem;

    h3 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 18px;
    }
`

export const Endereco = styled.div`
    height: 23.25rem;
    background: #F3F2F2;
    padding-top: 1rem;
    border-radius: 6px;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
`

export const LabelEndTitle = styled.div`
    font-size: 16px;
    color: #403937;
    padding-bottom: 0.4rem;
`

export const LabelEndDesc = styled.div`
    font-size: 14px;
    color:#574F4D;
`

export const Descricao = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    color: #C47F17;
    padding-bottom: 2rem;
    padding-top: 2rem;
`

export const BoxTitle = styled.div`
    display: flex;
    flex-direction: column;
`

export const InputArea = styled.form`
    width: 560px;
    height: 216px;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.875rem;
    gap: 1rem;
`

export const InputsCEP = styled.input`
    background: #EDEDED;
    border: solid 1px #E6E5E5;
    border-radius: 4px;
    color: #8D8686;
    height: 38px;
`

export const InputsRua = styled.input`
    background: #EDEDED;
    border: solid 1px #E6E5E5;
    border-radius: 4px;
    color: #8D8686;
    height: 38px;
    width: 99%;

    :disabled {
      background: lightgray;
    }
`

export const InputsNum = styled.input`
    background: #EDEDED;
    border: solid 1px #E6E5E5;
    border-radius: 4px;
    color: #8D8686;
    height: 38px;
    width: 160px;
`

export const InputsComp = styled.input`
    background: #EDEDED;
    border: solid 1px #E6E5E5;
    border-radius: 4px;
    color: #8D8686;
    height: 38px;
    width: 372px;
`

export const InputsBairro = styled.input`
    background: #EDEDED;
    border: solid 1px #E6E5E5;
    border-radius: 4px;
    color: #8D8686;
    height: 38px;
    width: 160px;

    :disabled {
      background: lightgray;
    }
`

export const InputsCidade = styled.input`
    background: #EDEDED;
    border: solid 1px #E6E5E5;
    border-radius: 4px;
    color: #8D8686;
    height: 38px;
    width: 250px;

    :disabled {
      background: lightgray;
    }
`

export const InputsEstado = styled.input`
    background: #EDEDED;
    border: solid 1px #E6E5E5;
    border-radius: 4px;
    color: #8D8686;
    height: 38px;
    width: 100px;

    :disabled {
      background: lightgray;
    }
`

export const InputDirection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`

export const PaymentMethode = styled.div`
    height: 11rem;
    padding-left: 2.5rem;
    padding-top: 1.5rem;
    background: #F3F2F2;
    font-family: 'Roboto', sans-serif;
    border-radius: 6px;
`

export const PaymentTitle = styled.div`
    color: #8047F8;
    display: flex;
    flex-direction: row;
    align-items: center;

    h3 {
        font-weight: normal;
        font-size: 16px;
        color: #403937;
        font-family: 'Roboto', sans-serif;
    }
`

export const PaymentSubTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 1.5rem;
    margin-top: -1.5rem;

    p {
        font-weight: normal;
        font-size: 14px;
        color: #574F4D;
        font-family: 'Roboto', sans-serif;
    }
`

export const ContainerMethode = styled.div`
    gap: 0.7rem;
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
`

export const ButtonMethode = styled.button`
    width: 11.166875rem;
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.2rem;
    color: #8047F8;
    background: #E6E5E5;
    border: none;
    border-radius: 6px;
    justify-content: left;
    padding-left: 1rem;
    cursor: pointer;

    p {
        color: #574F4D;
        font-size: 12px;
    }

    :hover {
        color: #4B2995;
    }

    :focus {
         border: solid 1px #8047F8;
         background: #EBE5F9;
    }
`

export const PedidoContainer = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 18px;
        padding-bottom: 1rem;
    }
`

export const CheckContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 30px;
    width: 448px;
    height: 498px;
    left: 832px;
    top: 182px;

    /* Base/Card */

    background: #F3F2F2;
    border-radius: 6px 44px;
`

export const ContainerResumo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: 'Roboto', sans-serif;
`

export const RowTotalItens = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: -0.5rem;
    h3 {
        font-size: 22px;
    }
`

export const ButtonConfirmarPedido = styled.button`
    border: none;
    border-radius: 8px;
    background: #DBAC2C;
    color: white;
    width: 100%;
    height: 46px;
    cursor: pointer;

    a {
        text-decoration: none;
        color:white;
    }

    :hover {
        background: #C47F17;
    }
`
