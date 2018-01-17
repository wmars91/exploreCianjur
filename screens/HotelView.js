import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content,Text,List,ListItem} from 'native-base';
import PropTypes from 'prop-types';
import { Image,View,Subtitle } from '@shoutem/ui';

class HotelView extends Component{
 
  static navigatorStyle = {
    navBarTransparent: true,
    drawUnderNavBar: true,
    navBarTextColor: '#ffffff',
    navBarButtonColor: '#ffffff'
  }
 
  render(){
    const {hotels} = this.props;
    return (
      <Container>
        <Content>
          <Image
            styleName="large"
            source={{ uri: hotels.image }}
          />
          <List>
            <ListItem itemDivider>
              <Text>{hotels.title}</Text>
            </ListItem>                    
            <ListItem >
              <Text>{hotels.content}</Text>
            </ListItem>
        </List>
        </Content>
      </Container>
    )
  }
}

HotelView.propTypes = {
    hotels: PropTypes.object.isRequired
};

export default HotelView;
