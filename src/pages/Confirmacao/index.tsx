import React from "react";
import { ContainerContent, ContainerInformations, InformationsRowLocal, InformationsRowPay, InformationsRowTime, SubContainerContent, SubContainerImage } from "./style";
import entregador from '../../assets/entregador.png'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Confirmacao(){
    return(
        <ContainerContent>
            <SubContainerContent>
                <h2>Uhu! Pedido confirmado</h2>
                <p>Agora é só aguardar que logo o café chegará até você</p>

                <ContainerInformations>
                    <InformationsRowLocal>
                        <div>
                            <MapPin size={24} weight='fill'/>
                        </div>
                        <p>
                        Entrega em <b>Rua João Daniel Martinelli, 102</b>, Farrapos - Porto Alegre, RS
                        </p>
                    </InformationsRowLocal>
                    <InformationsRowTime>
                        <div>
                            <Timer size={24} weight='fill'/>
                        </div>
                        <p>
                        Previsão de entrega
                        </p>
                        <p>
                          <b>20 min - 30 min</b>
                        </p>
                    </InformationsRowTime>
                    <InformationsRowPay>
                        <div>
                            <CurrencyDollar size={24} weight='fill'/>
                        </div>
                        <p>
                        Pagamento na entrega <b>Cartão de Crédito</b>
                        </p>
                    </InformationsRowPay>
                </ContainerInformations>
            </SubContainerContent>
            <SubContainerImage>
                <img src={entregador} />
            </SubContainerImage>
        </ContainerContent>
    )
}
