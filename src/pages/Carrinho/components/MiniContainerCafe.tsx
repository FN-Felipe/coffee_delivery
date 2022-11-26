import { Minus, Plus, Trash } from 'phosphor-react'
import cafe from '../../../assets/coffees/Image.png'
import { ButtonPlusMinus, ButtonRemove, ContainerButton, ContainerCafeImage, ContainerTitleAndButton, Count, MiniContainerCafeStyle, Price } from './style'

export function MiniContainerCafe(){
    return (
        <MiniContainerCafeStyle>
            <ContainerCafeImage>
                <img src={cafe}/>
            </ContainerCafeImage>
            <ContainerTitleAndButton>
                <p>Expresso Tradicional</p>
                <ContainerButton>
                    <Count>
                    <ButtonPlusMinus>
                        <Minus weight="bold"/>
                    </ButtonPlusMinus >
                        1
                    <ButtonPlusMinus>
                        <Plus weight="bold"/>
                    </ButtonPlusMinus >
                    </Count>
                    <ButtonRemove>
                        <Trash size={18}/>
                        <p>REMOVER</p>
                    </ButtonRemove>
                </ContainerButton>
            </ContainerTitleAndButton>
            <Price>
                <p>R$ 9,90</p>
            </Price>
        </MiniContainerCafeStyle>
    )
}