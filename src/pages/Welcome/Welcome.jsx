import React from 'react';
import { WelcomeHero, AboutContainer } from './Welcome.styled';

export default function Welcome() {
  return (
    <>
      <WelcomeHero>
        <div>
          <h1>PhoneBook</h1>
          <p>Yor contacts in one </p>
        </div>
        <h2>App</h2>
      </WelcomeHero>
      <AboutContainer>
        <h3>About</h3>
      </AboutContainer>
    </>
  );
}
