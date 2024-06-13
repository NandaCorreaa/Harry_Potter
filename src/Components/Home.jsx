import { useState, useEffect } from "react"
import styled from "styled-components"
import fundoPrincipal from "../assets/fundoprincipal.jpg"
import fundoLufalufa from "../assets/fundoLufalufa.jpg"
import fundoGrifinoria from "../assets/fundoGrifinoria.jpg"
import fundoCorvinal from "../assets/fundoCorvinal.jpg"
import fundoSonserina from "../assets/fundoSonserina.jpg"
import axios from "axios"
import { Swiper, SwiperSlide } from 'swiper/react' // SwiperSlide é referente a cada item do slide


const EnqueteContainer = styled.div`
    width: 35%;
    height: 75vh;
    background-image: url("data:image/png;base64,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");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #0000002c;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h2 {
        color: #ECBF77;
    }

    p {
        font-size: 35px;
        text-align: center;
    }

    @media (max-width: 768px){
        width: 90%;
        background-image: none;
        background-color: #00000098;
        border-radius: 10px;
        height: 80vh;
        
        h2 {
            font-size: 20px;
        }

        p {
            font-size: 25px;
        }
    }

    @media (min-width: 770px) and (max-width: 1300px){
        width: 41%;
    }
`
const BotoesContainer = styled.div`
    width: 80%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        background-color: #8479e7;
        border-radius: 15px;
        width: 100%;
        height: 8vh;
        cursor: pointer;

        &:hover {
            background-color: #b3acf3;
        }
    }
`

const SwiperContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #000;
`

const StyledSwiper = styled(Swiper)`
    width: 94%; 
    height : 50vh;
    display: flex;
    align-items: center;
    background-color: #000;

    @media (max-width: 768px){
        width: 320%;
        overflow: hidden;
        height: 40vh;
    }
`
const StyledSwiperSlide = styled(SwiperSlide)`
    height: 45vh;
    display: flex;
    align-items: center;
    border: solid;
    margin-top: 30px;

    img {
        width: 14.2vw;
        height: 40vh;
        border-radius: 20px;       
    } 
    
    @media (max-width: 768px){
        height: 30vh;
        width: 0vw;
        margin-right: 50px;

    img {
        width: 28vw;
        height: 20vh;
        border-radius: 15px;
    }
    }
`

export default function Home () {

    const [background, setBackground] = useState(fundoPrincipal) 

    const HomeFirstSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: #FFF;
    height: 88vh;
    background: linear-gradient(80deg, #12121259 0.5%, rgba(18, 18, 18, 0.219) 30.92%, rgba(18, 18, 18, 0) 50.19%, #12121271 100%), url(${background});
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 40px;
        color: #FFF;
        word-spacing: 8px;
    }

    @media (max-width: 768px){
        height: 100vh;

        h1 {
            font-size: 30px;
            width: 90%;
            text-align: center;
        }
    } 
`

    const casasHogwarts = [
        {
            casa: "Grifinória",
            fundo: fundoGrifinoria
        },
        {
            casa: "Lufa-Lufa",
            fundo: fundoLufalufa
        },
        {
            casa: "Sonserina",
            fundo: fundoSonserina
        },
        {
            casa: "Corvinal",
            fundo: fundoCorvinal
        }
    ]

    //Função para alterar o plano de fundo quando um botão de casa é clicado. 
    //Esta função atualiza o estado background com a URL da nova imagem.
    const mudarBackground = (fundo) => {
        setBackground(fundo)
    }

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

    return(
        <section>
            <HomeFirstSection>
                <h1>Seja muito bem-vindo (a)!</h1>
                <EnqueteContainer>
                    <h2>━━  ENQUETE ━━ </h2>
                    <p>Qual é a sua casa de Hogwarts? </p>
                    <BotoesContainer>
                        {casasHogwarts.map((item)=>(
                            <div>
                                <button onClick={() => mudarBackground(item.fundo)}>{item.casa}</button>
                
                            </div>
                        ))}
                    </BotoesContainer>
                </EnqueteContainer>
            </HomeFirstSection>
            <SwiperContainer>
                <StyledSwiper
                        slidesPerView={6}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}>
                        {personagens.map((item)=>(
                            <StyledSwiperSlide>
                                <img src={item.image} alt={item.name} />
                            </StyledSwiperSlide>
                        ))}
                </StyledSwiper>
            </SwiperContainer>
        </section>
    )
}