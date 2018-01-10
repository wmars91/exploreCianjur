import React, {Component} from 'react';
import {Container, Content, Text} from 'native-base';
import PropTypes from 'prop-types';

class FoodView extends Component{

 static navigatorStyle = {
   navBarHidden: true,
   tabBarHidden: true
 }

  render(){
    const {foods} = this.props;
    return (
      <Container>
        <Content>
            <Text>{foods.title}</Text>
        </Content>
      </Container>
    )
  }
}

FoodView.propTypes = {
    foods: PropTypes.object.isRequired
};

export default FoodView;
