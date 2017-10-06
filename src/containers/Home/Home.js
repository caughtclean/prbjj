import React, { Component, ProtoTypes } from 'react';
import { Container, Relative } from '../../theme/grid';
import { Image, ProfileImage, RevealP, Background, Img, Title } from './Home.style';
import NavigationBar from '../../components/NavigationBar/NavigationBar';



export default class Home extends Component {
  static protoTypes = {};

  render() {
    return (
      <Container>
        <ProfileImage/>
        <Background/>
        <Title> The only place in Powell River to offer Brazilian Jiu Jitsu! </Title>
        <p> Powell River Brazilian Jiu Jitsu offers a safe and positive environment to learn the "gentle art" of Brazilian Jiu Jitsu. All classes are taught by experienced brown belt and purple belt instructors. Our classes are geared towards both the recreational and competitive student. </p>
      </Container>
    );
  }
}

