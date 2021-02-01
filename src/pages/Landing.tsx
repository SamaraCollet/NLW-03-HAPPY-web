import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom"; // faz com que a pagina não precise recarregar todos os arquivos do zero ao ser acionada pelo link, diminui as requisições

import "../styles/pages/landing.css";

import logoImg from "../images/Logo.svg";

// substitui <a></a> por Link e o href por to , ajuda p a requisição ser menor
function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Curitiba</strong>
          <span>Paraná</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
