import React from 'react';
import headerImg from '../assets/img/banner-img.svg';
import navIcon1 from '../assets/img/nav-linkedin.svg';
import navIcon2 from '../assets/img/nav-cv.svg';
import navIcon3 from '../assets/img/nav-github.svg';
import '../styles/components/Home.sass';

function Home() {
  return (
    <section id="home">
      <div className="left">
        <span className="tag-line">Bem vindo ao meu portfolio</span>
        <h1>Oi, eu sou Pedro</h1>
        <h2>Desenvolvedor web full-stack</h2>
        <p>
          Sou formado pela Trybe, uma escola de desenvolvimento web
          que tem comprometimento genuíno com o sucesso profissional das pessoas estudantes.
          São mais de 1500 horas de formação que aborda fundamentos de desenvolvimento
          web, desenvolvimento Front-end, Back-end, ciência da computação, metodologias
          ágeis e habilidades comportamentais.
        </p>
        <div className="social">
          <a href="https://www.linkedin.com/in/pedro-ws/" target="_blank" rel="noreferrer">
            <img src={navIcon1} alt="" />
          </a>
          <a href="../assets/img/Curriculo.pdf" download>
            <img src={navIcon2} alt="" />
          </a>
          <a id="skills" href="https://github.com/allpha23" target="_blank" rel="noreferrer">
            <img src={navIcon3} alt="" />
          </a>
        </div>
      </div>
      <div className="right">
        <img src={headerImg} alt="Header Img" />
      </div>
    </section>
  );
}

export default Home;
