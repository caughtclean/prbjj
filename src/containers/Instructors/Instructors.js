import React, { Component } from 'react';
import { Background, Img, P, Profile } from './Instructors.style';
import { Container, Relative, Flex, marginBottom } from '../../theme/grid';
import { A, Links } from '../../theme/types';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

class Projects extends Component {
  render() {
    return (
      <Container>
        <Background/>
        <NavigationBar/>
        <Profile>
        <P>
        <Img
          src={require('../../assets/nick.jpg')}
          alt="nick"/>
        Since a very young age ​​Nicolas Ouellet has grown up within the martial arts. He currently holds a purple belt in brazilian jiu jitsu, a blue belt in judo and a black belt in karate. Nic is an active competitor with an excellent record and many podium finishes. Just about everyday you can find Nic on the mats drilling or helping others with their technique.
          </P>
        </Profile>
         <Profile>
        <P>
        <Img
          src={require('../../assets/raph.jpg')}
          alt="raph"/>
          Raph is also an active competitor who frequently finds himself on the podium. Raph is a high level blue belt who helps assist all classes.
          </P>
        </Profile>
      </Container>
    );
  }
}

export default Projects;