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
const Paginacao = styled.div`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    div {
        width: 60%;
        display: flex;
        justify-content: space-between;
    }

    button {
        color: #FFF;
        background-color: #0000005c;
        height: 5vh;
        width: 10%;
        font-size: 20px;
        cursor: pointer;
        margin: 3px;
    }

    @media (max-width: 768px){
        height: 20vh;

        div {
        width: 100%;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        button {
            margin: 2px;
        }
        }
    }
`

export default function Personagens() {

    const [personagens, setPersonagens] = useState([])
    const [itensPorPagina, setItemPorPagina] = useState (20) //itensPorPagina define quantos itens serão exibidos por página (neste caso, 20).
    const [paginaAtual, setPaginaAtual] = useState(0) //paginaAtual guarda o índice da página atual (começando de 0).

    //paginas calcula quantas páginas serão necessárias, dividindo o número total de personagens pelo número de itens por página. Math.ceil é usado para arredondar para cima caso o resultado seja um número quebrado.
    const paginas = Math.ceil(personagens.length / itensPorPagina)
    //startIndex determina o índice inicial dos personagens a serem exibidos na página atual.
    const startIndex = paginaAtual * itensPorPagina
    //endIndex determina o índice final.
    const endIndex = startIndex + itensPorPagina
    //personagensAtuais contém os personagens que serão exibidos na página atual, obtidos através do método slice.
    const personagensAtuais = personagens.slice(startIndex, endIndex)


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

    function goToPage(page){
        window.scrollTo({top: 0, behavior: 'smooth'}) //Faz com que a página role suavemente para o topo, dando uma transição mais agradável para o usuário quando ele muda de página.
        setPaginaAtual(page) //ui, estamos atualizando o estado paginaAtual com o valor passado como parâmetro, ou seja, o índice da página para a qual queremos ir
    }
    
    return (
        <PersonagensContainer>
            {/* Aqui criamos um número de botões igual ao valor da variável paginas,
             com cada botão exibindo seu índice correspondente. 
             - Array(paginas) cria um array vazio com o comprimento especificado pela variável paginas.
             - Array.from() é um método que cria uma nova instância de Array a partir de um array-like ou iterable object. No caso, ele está sendo usado para iterar sobre o array vazio criado anteriormente
             - O valor do botão (value) é definido como o índice da página.
             - onClick define a função que será executada quando o botão for clicado, alterando o estado de paginaAtual para o índice da página clicada.
             */}
        <InfoPersonagens>
            {personagensAtuais.map((item)=>(
                <div>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>Casa: {item.house}</p>
                    <p>Patrono: {item.patronus}</p>
                </div>
            ))}
        </InfoPersonagens>
        <Paginacao>
                <div>{Array.from(Array(paginas), (personagens, index)  => {
                        return <button onClick={() => goToPage(index)}>{index + 1}</button>                    
                    })}</div>
            </Paginacao>
        </PersonagensContainer>
  )
}
