import React, {Component} from 'react';
import { NavigationContainer, NavItem } from '../../components/NavigationBar/NavigationBar.style';
import { A, AA, Links } from '../../theme/types';





class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/projects">Instructors</NavItem>
        <NavItem to="/aboutMe">Schedule</NavItem>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;