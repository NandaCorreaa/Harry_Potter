import {BrowserRouter, Routes, Route} from "react-router-dom"
// BrowserRouter - Serve como um container que vai habilitar todas as funcionalidades das nossas rotas.
// Routes - Serve como uma caixa para cada rota
// Route - É cada rota em individual
import styled from "styled-components";
import Header from "./Components/Header"
import Home from "./Components/Home"
import Personagens from "./Components/Personagens"
import Feitiços from "./Components/Feitiços"
import Sobre from "./Components/Sobre"

const AppContainer = styled.div`
  height: 100vh;
  background: linear-gradient(80deg, #12121259 0.5%, rgba(18, 18, 18, 0.219) 30.92%, rgba(18, 18, 18, 0) 50.19%, #12121271 100%), url(${props => props.background});
  background-size: cover;
`;

export default function App () {

  return(
    <BrowserRouter>
      <AppContainer>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/personagens" element={<Personagens/>} />
          <Route path="/feiticos" element={<Feitiços/> } />
          <Route path="/sobre" element={<Sobre/>} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  )
}