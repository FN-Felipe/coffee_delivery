import React from 'react';
import logo from '../../assets/logo.png';
import { ButtonHeaderLocal, HeaderContainer, ButtonHeaderCar, Alinhamento } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header(){
    return (
        <HeaderContainer>
          <a href='/home'>
            <img src={logo} />
          </a>
          <Alinhamento>
              <ButtonHeaderLocal>
                  <MapPin size={24} weight="fill"/>
                  Jaboticabal, SP
              </ButtonHeaderLocal>
              <a href='/carrinho'>
                  <ButtonHeaderCar>
                      <ShoppingCart size={20} weight="fill"/>
                  </ButtonHeaderCar>
              </a>
          </Alinhamento>
        </HeaderContainer>
    )
}
