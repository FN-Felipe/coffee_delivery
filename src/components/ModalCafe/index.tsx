import {
    BoxCafe,
    Description,
    Count,
    ButtonPlusMinus,
    Price,
    ButtonCar,
    TagDescription,
    DetailsCenter
} from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react';

export interface ModalCafeProps {
    id?: number;
    image: string;
    tag1: string;
    tag2?: string;
    tag3?: string;
    title: string;
    content: string;
    price: number | string;
}

export function ModalCafe({image, tag1, tag2, tag3, title, content, price} : ModalCafeProps) {

    const [countNum, setCountNum] = useState(1)
    const [carrinho, setCarrinho] = useState([])
    function CountPlus(){
        return setCountNum(countNum + 1)
    }

    function CountMinus(){
        return setCountNum(countNum - 1)
    }

    
    return (
        <>
            <BoxCafe>
                    <img src={image}/>
                <TagDescription>
                    <h5>{tag1}</h5>
                    {tag2 &&
                        <h5>{tag2}</h5>
                    }
                    {tag3 &&
                        <h5>{tag3}</h5>
                    }
                </TagDescription>
                <Description>
                    <h3>{title}</h3>
                    <p>{content}</p>
                </Description>
                <DetailsCenter>
                    <Price>
                        <h6>R$</h6>
                        <h3>{price}</h3>
                    </Price>
                    <Count>
                        <ButtonPlusMinus onClick={CountMinus}>
                            <Minus weight="bold"/>
                        </ButtonPlusMinus >
                            {countNum}
                        <ButtonPlusMinus onClick={CountPlus}>
                            <Plus weight="bold"/>
                        </ButtonPlusMinus >
                    </Count>
                    <ButtonCar>
                        <ShoppingCart weight="fill" size={20}/>
                    </ButtonCar>
                </DetailsCenter>
            </BoxCafe>
        </>
    )
}
