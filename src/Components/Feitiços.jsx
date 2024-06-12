import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import fundoHP from "../assets/fundoHP.jpg"
import pomoDeOuro from "../assets/pomoDeOuro.png"

const FeiticosIntro = styled.section`
    background-image: url("https://images.ctfassets.net/usf1vwtuqyxm/7IbDbe93kJ4zsJatKeihQz/1ab0fbab0fd1704f20e1b5c9ea09a064/Homepage_Hero_Fact_File_Index_IMAGE_RIGHT.png");
    height: 50vh;
    background-size: cover;
    color: #FFF;
    display: flex;
    align-items: center;

    div {
        width: 40%;
        height: 30vh;
        margin-left: 10rem;
    }

    h2 {
        font-size: 50px;
    }

    p {
        font-size: 30px;
    }
`
const FeiticosDescricao = styled.section`
background-image: url(${fundoHP});
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-evenly;

div {
    border-radius: 20px;
    width: 25%;
    height: 30vh;
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 40px;
    backdrop-filter: blur(5px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.376) 0px 12px 13px, rgba(0, 0, 0, 0.428) 0px -3px 5px;
}

h2 {
    font-size: 35px;
}
p{
    font-size: 20px;
    width: 97%;
    text-align: center;
}
`

export default function Feitiços (){

    const [feiticos, setFeiticos] = useState([])

    async function feiticosDados(){
        const dados = await axios.get(`https://hp-api.onrender.com/api/spells`)
    
    try{
        setFeiticos(dados.data)
    }catch(erro){
        alert (`Desculpe, ocorreu um erro ${erro}`)
    }
    }

    useEffect(()=>{
        feiticosDados()
    }, [])

    return(
        <section>
            <FeiticosIntro>
                <div>
                    <h2>Peguem suas varinhas,</h2>
                    <p>pois estamos prestes a embarcar em uma jornada pelo incrível mundo da magia!</p>
                </div>
            </FeiticosIntro>
            <FeiticosDescricao>
                {feiticos.map((item)=>(
                    <div>
                        <img src={pomoDeOuro} alt="Pomo De Ouro" />
                        <h2>Feitiço: {item.name}</h2>
                        <p>Descrição: {item.description}</p>
                    </div>
                ))}
            </FeiticosDescricao>
        </section>
    )
}