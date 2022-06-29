import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubMenu } = useGlobalContext();
  return (
    <main className='hero' onMouseOver={closeSubMenu}>
      <section className='hero-center'>
        <article className='hero-info'>
          <h1>Payments infrastructure for internet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            repudiandae doloribus ea, repellendus doloremque sunt nulla dolorem
            architecto dolor vel.
          </p>
        </article>
        <img src={phoneImg} alt='' className='hero-images' />
      </section>
    </main>
  );
};

export default Hero;
