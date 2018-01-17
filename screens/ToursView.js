import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content,Text,List,ListItem} from 'native-base';
import PropTypes from 'prop-types';
import { Image,View,Subtitle } from '@shoutem/ui';

class ToursView extends Component{

  static navigatorStyle = {
    navBarTransparent: true,
    drawUnderNavBar: true,
    navBarTextColor: '#ffffff',
    navBarButtonColor: '#ffffff'
  }

  render(){
    const {tours} = this.props;
    return (
      <Container>
        <Content>
          <Image
            styleName="large"
            source={{ uri: tours.image }}
          />
          <List>
            <ListItem itemDivider>
              <Text>{tours.title}</Text>
            </ListItem>                    
            <ListItem >
              <Text>{tours.content}</Text>
            </ListItem>
        </List>
        </Content>
      </Container>
    )
  }
}

ToursView.propTypes = {
    tours: PropTypes.object.isRequired
};

export default ToursView;
