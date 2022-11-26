import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import React, { createContext, useEffect, useState } from "react";
import CafeHome from "../../assets/coffees/CafeHome.png"
import { BolinhaCaixa, BolinhaCar, BolinhaCoffee, BolinhaTime, BottomDiv, Conteudo, Description, Description1, Flex, ImagemCafe, Introduction, Modais, Subtitulo, TitleDescriptions } from "./styles";
import tradicional from '../../assets/coffees/Image.png'
import americano from '../../assets/coffees/Type=Americano.png'
import arabe from '../../assets/coffees/Type=Árabe.png'
import cafeLeite from '../../assets/coffees/Type=CafécomLeite.png'
import cafeGelado from '../../assets/coffees/Type=CaféGelado.png'
import capuccino from '../../assets/coffees/Type=Capuccino.png'
import chocolateQuente from '../../assets/coffees/Type=ChocolateQuente.png'
import cubano from '../../assets/coffees/Type=Cubano.png'
import expressoCremoso from '../../assets/coffees/Type=ExpressoCremoso.png'
import havaiano from '../../assets/coffees/Type=Havaiano.png'
import irlandes from '../../assets/coffees/Type=Irlandês.png'
import latte from '../../assets/coffees/Type=Latte.png'
import macchiato from '../../assets/coffees/Type=Macchiato.png'
import mochaccino from '../../assets/coffees/Type=Mochaccino.png'
import { ModalCafe, ModalCafeProps } from "../../components/ModalCafe";

  const content = [
    {
      id: 1,
      image: tradicional,
      tag1: 'Tradicional',
      title: 'Expresso Tradicional',
      content: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.90
    },
    {
      id: 2,
      image: americano,
      tag1: 'Tradicional',
      title: 'Expresso Americano',
      content: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.90
    },
    {
      id: 3,
      image: arabe,
      tag1: 'Especial',
      title: 'Árabe',
      content: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.90
    },
    {
      id: 4,
      image: cafeLeite,
      tag1: 'Tradicional',
      tag2: 'com leite',
      title: 'Café com Leite',
      content: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.90
    },
    {
      id: 5,
      image: cafeGelado,
      tag1: 'Tradicional',
      tag2: 'gelado',
      title: 'Expresso Gelado',
      content: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.90
    },
    {
      id: 6,
      image: capuccino,
      tag1: 'Tradicional',
      tag2: 'com leite',
      title: 'Capuccino',
      content: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.90
    },
    {
      id: 7,
      image: chocolateQuente,
      tag1: 'especial',
      tag2: 'com leite',
      title: 'Chocolate Quente',
      content: 'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.90
    },
    {
      id: 8,
      image: cubano,
      tag1: 'especial',
      tag2: 'alcoólico',
      tag3: 'gelado',
      title: 'Cubano',
      content: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.90
    },
    {
      id: 9,
      image: expressoCremoso,
      tag1: 'Tradicional',
      title: 'Expresso Cremoso',
      content: 'Café expresso tradicional com espuma cremosa',
      price: 9.90
    },
    {
      id: 10,
      image: havaiano,
      tag1: 'especial',
      title: 'Havaiano',
      content: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.90
    },
    {
      id: 11,
      image: irlandes,
      tag1: 'especial',
      tag2: 'alcoólico',
      title: 'Irlandês',
      content: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.90
    },
    {
      id: 12,
      image: latte,
      tag1: 'Tradicional',
      tag2: 'com leite',
      title: 'Latte',
      content: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.90
    },
    {
      id: 13,
      image: macchiato,
      tag1: 'Tradicional',
      tag2: 'com leite',
      title: 'Macchiato',
      content: 'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.90
    },
    {
      id: 14,
      image: mochaccino,
      tag1: 'Tradicional',
      tag2: 'com leite',
      title: 'Mocaccino',
      content: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.90
    },

  ]

export function Home() {
  const [coffees, setCoffees] = useState<ModalCafeProps[]>()

  function formatCurrency(price : number | string){
    return new Intl.NumberFormat('pt-BR', { style: 'decimal', currency: 'BRL', minimumFractionDigits: 2 }).format(Number(price))
  }

  useEffect(() => {
    setCoffees(content)
  }, [])

  return (
    <>
      <Conteudo>
        <Introduction>
          <TitleDescriptions>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
          </TitleDescriptions>
          <Description>
            <BolinhaCar>
              <ShoppingCart size={25} weight="fill" />
            </BolinhaCar>
            <p>Compra simples e segura</p>

            <BolinhaCaixa>
              <Package size={40} weight="fill" />
            </BolinhaCaixa>
            <p>Embalagem mantém o café intacto</p>
          </ Description>
          <Description>
            <BolinhaTime>
              <Timer size={40} weight="fill" />
            </BolinhaTime>
            <p>Entrega rápida e rastreada</p>
            <BolinhaCoffee>
              <Coffee size={40} weight="fill" />
            </BolinhaCoffee>
            <p>O café chega fresquinho até você</p>
          </Description>
        </Introduction>
        <ImagemCafe>
          <img src={CafeHome} />
        </ImagemCafe>
      </Conteudo>
      <Subtitulo>Nossos cafés</Subtitulo>
      <Modais>
          {coffees && coffees.map(content => {
            return (
            <Flex>
              <ModalCafe
                key={content.id}
                image={content.image}
                tag1={content.tag1}
                tag2={content.tag2}
                tag3={content.tag3}
                title={content.title}
                content={content.content}
                price={formatCurrency(content.price)}
              />
            </Flex>
            )
          })}
      </Modais>
      <BottomDiv />
    </>
  )
}
