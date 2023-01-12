import React from 'react';
import Carousel from 'react-multi-carousel';
import { Icon } from '@iconify/react';
import 'react-multi-carousel/lib/styles.css';
import skillsIcon from '../data/skillsIcon';
import colorSharp from '../assets/img/color-sharp.png';

import '../styles/components/Skills.sass';

function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="skills">
      <div className="skills-container">
        <h2>Skills</h2>
        <p>
          Aqui esta algumas das habilidade que desenvolvi ao logo do curso
          <br />
          ao realizar os diversos projetos propostos em cada modulo
        </p>
        <Carousel className="skillSlider" responsive={responsive} infinite>
          {skillsIcon.map((icon) => (
            <div key={icon.id} className="item">
              <Icon icon={icon.icon} />
              <h5>{icon.title}</h5>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="backgroundImg">
        <img src={colorSharp} alt="" />
      </div>
    </section>
  );
}

export default Skills;
