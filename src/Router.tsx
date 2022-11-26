import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Carrinho } from './pages/Carrinho'
import { Confirmacao } from './pages/Confirmacao'
import { Home } from './pages/Home'

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/home' element={<Home />} />
                <Route path='/carrinho' element={<Carrinho />}/>
                <Route path='confirmacao' element={<Confirmacao />}/>
            </Route>
        </Routes>
    )
}
