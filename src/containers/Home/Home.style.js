import styled, { css } from 'styled-components';
import media from '../../theme/media';



export const Image = styled.img`
  width: 100%
`

export const Img = styled.img`
  height: 25%;
  width: 25%;
  float: right;
  bottom: 0;
  right: -20vh;
`;

export const Title = styled.h2`
  margin-top: 20vh;
  color: black;
  margin-bottom: 10vh;
  text-align: center
`;


export const ProfileImage = styled.div`
  height: 120vh;
  background-image: url('${require('../../assets/profile.jpg')}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 50px;
  margin-bottom: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  color: white;

  font-size: 2em;

  ${media.tablet`
    font-size: 1em;
    left: 0;
    width: 100vw;
    top: 10vh;
    height: 100vh;
    margin-top: 10vh;
    margin-bottom: 300px;
    `}
      ${media.phone`
    font-size: 1em;
    left: 0;
    width: 100vw;
    top: 0;
    height: 100vh;
    margin-top: 10vh;
    margin-bottom: 300px;
    `}

  h2 {
    margin: 0;
  }
`

export const Background = styled.div`
  position: fixed;
  left: 10vw;
  width: 80vw;
  top: 10vh;
  height: 100vh;
  background-image: url(${require('../../assets/logo.jpg')});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
  opacity: 0.35;

  ${media.tablet`
    font-size: 1em;
    left: 0;
    width: 100vw;
    top: 0;
    height: 80vh;
    margin-top: 10vh;
    margin-bottom: 300px;
    `}
      ${media.phone`
    font-size: 1em;
    left: 0;
    width: 100%;
    top: 0;
    height: 100%
    margin-top: 10vh;
    margin-bottom: 300px;
    `}


`;

export const RevealP = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 1s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;