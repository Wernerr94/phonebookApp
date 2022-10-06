import React, { useState } from 'react';
import { WelcomeHero, AboutContainer } from './Welcome.styled';
import arrow from '../../down-arrow.png';

export default function Welcome() {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(!show);
  }
  return (
    <>
      <WelcomeHero>
        <div>
          <h1>PhoneBook</h1>
          <p>Yor contacts in one </p>
        </div>
        <h2>App</h2>
      </WelcomeHero>
      <AboutContainer show={show}>
        <h3 onClick={handleClick}>About</h3>
        {!show ? (
          <img src={arrow} alt="arrow down" />
        ) : (
          <img src={arrow} alt="arrow up" style={{ rotate: 'calc(180deg)' }} />
        )}
        {show && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sed
            sit sequi eum, debitis expedita iure iste illum! Aperiam minima
            maiores, atque quisquam vitae necessitatibus rerum quaerat
            doloremque libero nesciunt. Cum dolorum dolor officiis blanditiis,
            esse maiores repellat. Iure veritatis eos laboriosam cumque quos
            beatae voluptatum excepturi illo odio tempora, minus sapiente ex
            facere sit repudiandae amet, ullam aliquid consectetur! Ab repellat
            minima ex, neque quibusdam dicta error, inventore, molestiae harum
            laudantium perspiciatis. Ab quas nisi accusamus, omnis nulla in
            debitis voluptate dolores quis quos reiciendis, quisquam earum quia.
            Sint. Quam, porro. Eum aut placeat suscipit praesentium quam quos
            illo rem tempora, nesciunt, hic nisi culpa ipsam corporis
            repudiandae id debitis autem! Asperiores et consequuntur at? Ducimus
            veniam consequatur sit.
          </p>
        )}
      </AboutContainer>
    </>
  );
}
