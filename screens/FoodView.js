import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content,Text,List,ListItem} from 'native-base';
import PropTypes from 'prop-types';
import { Image,View,Subtitle } from '@shoutem/ui';

class FoodView extends Component{

  static navigatorStyle = {
    navBarTransparent: true,
    drawUnderNavBar: true,
    navBarTextColor: '#ffffff',
    navBarButtonColor: '#ffffff'
  }

  render(){
    const {foods} = this.props;
    return (
      <Container>
        <Content>
          <Image
            styleName="large"
            source={{ uri: foods.image }}
          />
          <List>
            <ListItem itemDivider>
              <Text>{foods.title}</Text>
            </ListItem>                    
            <ListItem >
              <Text>{foods.content}</Text>
            </ListItem>
        </List>
        </Content>
      </Container>
    )
  }
}

FoodView.propTypes = {
    foods: PropTypes.object.isRequired
};


export default FoodView;
