import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding' id='footer'>
      <div className='gpt3__footer-btn gradient__text'>
        <p><i className="fa-solid fa-arrow-down-long "></i> Solicita informacion adicional <i className="fa-solid fa-arrow-down-long"></i></p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>Hudson 970 - La Tablada - Buenos Aires</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Instagram</p>
          <p>Whats Up</p>
          <p>Mail</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Compania</h4>
          <p>Terminos & Condiciones</p>
          <p>Politica de Privacidad</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Contactanos!</h4>
          <p>Juan Manuel</p>
          <p>11-6497-7448</p>
          <p>Especiasobregon@gmail.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2022 Especiera Obregon. Todos los derechos reservados.</p>
      </div>
    </div>
  )
}

export default Footer
