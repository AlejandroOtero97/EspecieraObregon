import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1>Bienvenido a Especiera Obregon.</h1>
        <p>Nuestra prioridad es abastecer de Especias y Condimentos, a todo tipo de clientes. 
          siguiendo las más altas normas de calidad,
          trazabilidad y pureza..</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder="Escribe tu email aca..."/>
          <button type='button'>Contactanos!</button>
        </div>
        <div className='gpt3__header-content__people'>
          <p>Apoyando a la comunidad desde 1990.</p>
        </div>
      </div>
    </div>
  )
}

export default Header
