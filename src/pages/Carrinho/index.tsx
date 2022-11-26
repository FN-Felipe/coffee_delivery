import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import React from "react";
import { useForm } from "react-hook-form";
import { MiniContainerCafe } from "./components/MiniContainerCafe";
import { BoxTitle, ButtonConfirmarPedido, ButtonMethode, CheckContainer, ContainerMethode, ContainerResumo, ContentPage, Descricao, Endereco, GeralEndePag, InputArea, InputDirection, InputsBairro, InputsCEP, InputsCidade, InputsComp, InputsEstado, InputsNum, InputsRua, LabelEndDesc, LabelEndTitle, PaymentMethode, PaymentSubTitle, PaymentTitle, PedidoContainer, RowTotalItens } from "./style";

export function Carrinho(){
  const { register, handleSubmit, setValue, setFocus } = useForm()

  const checkCep = (e: any) => {
    const cep = e.target.value.replace(/\D/g,'');
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      setValue('rua', data.logradouro)
      setValue('bairro', data.bairro)
      setValue('cidade', data.localidade)
      setValue('estado', data.uf)
      setFocus('numero')
    });
  }
    return(
        <ContentPage>
            <GeralEndePag>
                <h3>Complete seu pedido</h3>
                <Endereco>
                    <Descricao>
                        <MapPinLine size={25}/>
                        <BoxTitle>
                            <LabelEndTitle>
                                Endereço de Entrega
                            </LabelEndTitle>
                            <LabelEndDesc>
                                Informe o endereço onde deseja receber seu pedido
                            </LabelEndDesc>
                        </BoxTitle>
                    </Descricao>
                    <InputArea>
                        <InputsCEP placeholder="CEP" {...register('cep')} onBlur={checkCep}/>
                        <InputsRua placeholder="Rua" {...register('rua')} disabled/>
                        <InputDirection>
                            <InputsNum placeholder="Número" {...register('numero')}/>
                            <InputsComp placeholder="Complemento"/>
                        </InputDirection>
                        <InputDirection>
                            <InputsBairro placeholder="Bairro" {...register('bairro')} disabled/>
                            <InputsCidade placeholder="Cidade" {...register('cidade')} disabled/>
                            <InputsEstado placeholder="UF" {...register('estado')} disabled/>
                        </InputDirection>
                    </InputArea>
                </Endereco>
                <PaymentMethode>
                  <PaymentTitle>
                      <CurrencyDollar size={20}/>
                      <h3>Pagamento</h3>
                  </PaymentTitle>
                  <PaymentSubTitle>
                      <p>
                          O pagamento é feito na entrega. Escolha a forma que deseja pagar
                      </p>
                  </PaymentSubTitle>
                  <ContainerMethode>
                  <ButtonMethode>
                          <CreditCard size={20}/>
                          <p>CARTÃO DE CRÉDITO</p>
                      </ButtonMethode>
                      <ButtonMethode>
                          <Bank size={20}/>
                          <p>CARTÃO DE DÉBITO</p>
                      </ButtonMethode>
                      <ButtonMethode>
                          <Money size={20}/>
                          <p>DINHEIRO</p>
                      </ButtonMethode>
                  </ContainerMethode>
                </PaymentMethode>
            </GeralEndePag>
            <PedidoContainer>
                <h3>Cafés selecionados</h3>
                <CheckContainer>
                    <MiniContainerCafe />
                    <MiniContainerCafe />
                    <ContainerResumo>
                        <RowTotalItens>
                            <p>Total de itens</p>
                            <p>R$ 29,80</p>
                        </RowTotalItens>
                        <RowTotalItens>
                            <p>Entrega</p>
                            <p>R$ 3,50</p>
                        </RowTotalItens>
                        <RowTotalItens>
                            <h3>Total</h3>
                            <h3>R$ 33,20</h3>
                        </RowTotalItens>
                    </ContainerResumo>
                    <ButtonConfirmarPedido>
                        <a href="/confirmacao">
                            CONFIRMAR PEDIDO
                        </a>
                    </ButtonConfirmarPedido>
                </CheckContainer>
            </PedidoContainer>
        </ContentPage>
    )
}
