import React, {Component} from 'react';
import {Container, Content, Text} from 'native-base';
import PropTypes from 'prop-types';

class ToursView extends Component{

 static navigatorStyle = {
   navBarHidden: true,
   tabBarHidden: true
 }

  render(){
    const {tours} = this.props;
    return (
      <Container>
        <Content>
            <Text>{tours.title.rendered}</Text>
        </Content>
      </Container>
    )
  }
}

ToursView.propTypes = {
    tours: PropTypes.object.isRequired
};

export default ToursView;
