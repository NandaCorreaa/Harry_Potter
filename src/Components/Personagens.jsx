import styled from "styled-components"
import axios from "axios"
import { useState, useEffect } from "react"
import fundoHP from "../assets/fundoHP.jpg"

const PersonagensContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
color: #FFF;
background-image: url(${fundoHP});
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 768px){
} 
`

const InfoPersonagens = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;

    div {
        width: 20%;
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
    }
    img {
        width: 12vw;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.8) 0px 12px 13px, rgba(0, 0, 0, 0.433) 0px -3px 5px;
     }

     @media (max-width: 768px){
        flex-direction: column;

        div {
            width: 100%;
        }
        
        img {
            width: 50vw;
        }
    }

    @media (min-width: 770px) and (max-width: 1300px){
        width: 100%;

        div{
            width: 30%;
        }

        img {
            width: 15vw;
        }
    }
`

export default function Personagens() {

    const [personagens, setPersonagens] = useState([])

    async function pegarDados() {
        const dados = await axios.get(`https://hp-api.onrender.com/api/characters`)
    
    try{
        setPersonagens(dados.data)
    }catch(erro){
        alert (`Desculpe, ocorreu um erro ${erro}`)
    }
    }

    useEffect(() => {
        pegarDados()
    }, [])

    return (
        <PersonagensContainer>
        <InfoPersonagens>
            {personagens.map((item)=>(
                <div>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>Casa: {item.house}</p>
                    <p>Patrono: {item.patronus}</p>
                </div>
            ))}
        </InfoPersonagens>
        </PersonagensContainer>
  )
}
