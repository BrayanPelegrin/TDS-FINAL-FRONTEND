import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from './logo/log.png';
import { Link } from "react-router-dom";
import { Perfil } from './Perfil';
import { IniciarSesion } from './IniciarSesion';
import { SalirSesion } from './SalirSesion';
import { useAuth0 } from '@auth0/auth0-react';

const Contenedor = styled.div`
    background-color: #2192FF;
    
`
const Envoltura = styled.div`
    padding: 10px 20px; 
    display: flex;
    align-items: center;
    justify-content : space-between;
` 
const Izquierda = styled.div`
    display: flex;
    flex: 1.4;
    text-align: center;
`

const Lenguaje = styled.span`
    font-size: 10px;
    cursor: pointer;
    margin-right: 15px;
`

const ContenedorDeBusqueda = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    margin-left: 20px;
    padding: 5px;
    border-radius: 5px;
`

const Input = styled.input`
    border: none;
    outline: none;
`

const Centro = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 20%;
    padding-top: 0;
`

const Derecha = styled.div`
    flex: 1;
    display: flex;
    align-items:center;
    justify-content: flex-end;
`

const MenuItems = styled.div`
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    margin-left: 25px;
    color: black;
`

const Navbar = () => {
    const {isAuthenticated} = useAuth0();
  return (
    <Contenedor>
        <Envoltura>
            <Izquierda>
                <Lenguaje>ES</Lenguaje>
                <Logo src = {logo}/>
            </Izquierda>
            <Centro>
                <ContenedorDeBusqueda>
                    <Input/>
                    <SearchIcon style={{color: "black", fontSize:16}}/>
                </ContenedorDeBusqueda> 
            </Centro>
            <Derecha> 
            <Link style={{ textDecoration: 'none' }}to="/MantenimientoProductos"><MenuItems>Mantenimiento</MenuItems></Link>
            
            {isAuthenticated ?(
            <>
            <MenuItems>
                <Perfil/>
            </MenuItems>
            <MenuItems>
                <SalirSesion/>
            </MenuItems>
            </>
            ): (
            <MenuItems><IniciarSesion/></MenuItems>)}
                <MenuItems>
                    <Badge badgeContent={5} color="primary">
                        <ShoppingCartIcon color="action" />
                    </Badge>
                </MenuItems>
            </Derecha>
        </Envoltura>
    </Contenedor>
  )
}

export default Navbar