import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'
import { register } from 'swiper/element/bundle' // função de importação para registrar pacote de elementos personalizados do Swiper
register()
import 'swiper/css'; //importação do css padrão do swiper
import 'swiper/css/navigation' //import dos módulos do swiper (setinha pro lado)
import 'swiper/css/pagination' //import dos módulos do swiper (bolinhas pro lado)
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: "Rowdies", sans-serif;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)
