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
    const {data} = this.props;
    return (
      <Container>
        <Content>
          <Image
            styleName="large"
            source={{ uri: data.image }}
          />
          <List>
            <ListItem itemDivider>
              <Text>{data.title}</Text>
            </ListItem>                    
            <ListItem >
              <Text>{data.content}</Text>
            </ListItem>
        </List>
        </Content>
      </Container>
    )
  }
}

ToursView.propTypes = {
    data: PropTypes.object.isRequired
};

export default ToursView;
