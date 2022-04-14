import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>Mucho esta pasando, no te lo pierdas!</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="Apr 13, 2022" title="Donde puedes encontrarnos!"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
        <Article imgUrl={blog02} date="Apr 13, 2022" title="Descripcion de producto + texto de relleno"/>
        <Article imgUrl={blog03} date="Apr 13, 2022" title="Descripcion de producto + texto de relleno"/>
        <Article imgUrl={blog04} date="Apr 13, 2022" title="Descripcion de producto + texto de relleno"/>
        <Article imgUrl={blog05} date="Apr 13, 2022" title="Descripcion de producto + texto de relleno"/>
        </div>
      </div>
    </div>
  )
}

export default Blog

