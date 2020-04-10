import React from 'react';
import { styled } from '../../config/theme';
import profilePicture from '../../static/images/babbyProfile.png';
import { Header, DarkPageContainer } from '../common/page/page-layout';

const ProfilePicture = styled('img', ({$theme}) => ({
  objectFit: 'contain',
  width: '200px',
  height: 'auto',
  borderRadius: '50%',
  border: `${$theme.sizing.scale100} solid ${$theme.colors.light01}`,
  // border: '2px solid white',
}));

const LandingPageGreeting = styled('div', ({ $theme }) => ({
  ...$theme.flex.col,
  ...$theme.flex.centered,
}));

export const Landing = () => (
  <DarkPageContainer>
    <LandingPageGreeting>
      <ProfilePicture src={profilePicture} alt="Wengang Yang smiling in black and white" />
      <br />
      <Header>
        Welcome to the memorial website of Wengang Yang
      </Header>
    </LandingPageGreeting>
  </DarkPageContainer>
);
