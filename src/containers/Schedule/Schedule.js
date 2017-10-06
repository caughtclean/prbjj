import React, { Component } from 'react';
import { Container } from '../../theme/grid'
import { Title, Background, RevealP, About } from './Schedule.style'
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import YouTube from 'react-youtube';
import { Flex } from '../../theme/grid';



const Video = {
  opts1: {
      height: '390',
      width: '640',
      id: "jzD3OS_hiRI"
  },
  opts2: {
      height: '390',
      width: '640',
      id: "SXTWA4Q4MKU"
  },
  opts3: {
      height: '390',
      width: '640',
      id: "xZV6wzI2aN8"
  }

};

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <NavigationBar/>
        <Background/>
      </Container>
    );
  }
}


export default AboutMe;