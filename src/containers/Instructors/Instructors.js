import React, { Component } from 'react';
import { ImageButton, Index, Background } from './Instructors.style';
import { Container, Relative, Flex, marginBottom } from '../../theme/grid';
import { A, Links } from '../../theme/types';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

class Projects extends Component {
  render() {
    return (
      <Container>
        <Background/>
        <NavigationBar/>
      </Container>
    );
  }
}

export default Projects;