import React, {Component} from 'react';
import {Container, Content, Text} from 'native-base';
import PropTypes from 'prop-types';

class HotelView extends Component{

 static navigatorStyle = {
   navBarHidden: true,
   tabBarHidden: true
 }

  render(){
    const {hotels} = this.props;
    return (
      <Container>
        <Content>
            <Text>{hotels.title}</Text>
        </Content>
      </Container>
    )
  }
}

HotelView.propTypes = {
    hotels: PropTypes.object.isRequired
};

export default HotelView;
