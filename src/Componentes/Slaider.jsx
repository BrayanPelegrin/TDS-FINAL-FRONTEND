import styled from "styled-components"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { sliderItems } from "../data";
import { useState } from "react";

const Contenedor = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Flecha = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom:0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    z-index: 2;
`

const Envoltura = styled.div`
    height: 100%;
    display: flex; 
    transition: all 1.5s ease;
    transform: translateX(${props=>props.sliderIndex * -100}vw);
`
const Cuerpo = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

const ContenedorImagen = styled.div`
    flex: 1;
    height: 100%;

`

const ImagenPrueba = styled.img`
    height: 80%;
`

const ContenedorInfo = styled.div`
    flex: 1;
    padding: 50px;
`
const Titulo = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Butt = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slaider = () => {
    const[sliderIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{
        
        if(direction ==="left"){
            setSlideIndex(sliderIndex > 0 ? sliderIndex-1: 3)
        }else{
            setSlideIndex(sliderIndex < 3 ? sliderIndex+1: 0)
        }
    }

  return (
    <Contenedor>
        <Flecha direction = "left" onClick={()=>handleClick("left")}>
            <ArrowLeftIcon/>
        </Flecha>
        <Envoltura sliderIndex ={sliderIndex}>
            {sliderItems.map(item=>(
                <Cuerpo>
                    <ContenedorImagen>
                        <ImagenPrueba src={item.img}/>
                    </ContenedorImagen>
                    <ContenedorInfo>
                        <Titulo>{item.title}</Titulo>
                        <Desc>{item.desc}</Desc>
                        <Butt>Mostrar producto</Butt>
                    </ContenedorInfo>
                </Cuerpo>
            ))}
        </Envoltura>
        <Flecha direction = "right" onClick={()=>handleClick("right")}>
            <ArrowRightIcon/>
        </Flecha >
    </Contenedor>
  )
}

export default Slaider