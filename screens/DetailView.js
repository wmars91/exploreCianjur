import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Linking, ScrollView, Dimensions } from 'react-native';
import { Container, Content, Text, List, ListItem, Left, Body, Right, Icon, Button } from 'native-base';
import PropTypes from 'prop-types';
import { Image, View, Subtitle } from '@shoutem/ui';
import openMap from 'react-native-open-maps';
import HTML from 'react-native-render-html';

class DetailView extends Component {

  static navigatorStyle = {
    navBarTransparent: true,
    drawUnderNavBar: true,
    navBarTextColor: '#ffffff',
    navBarButtonColor: '#ffffff'
  }

  render() {
    const { data } = this.props;
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

            <ListItem icon>
              <Left>
                <Icon name="call" style={{fontSize: 20, color: '#4CC7F3'}}/>
              </Left>
              <Body>
                <Text style={{fontSize: 15, color: '#4CC7F3'}}>{data.telp}</Text>
              </Body>
              <Right />
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="paper-plane" style={{fontSize: 20, color: '#4CC7F3'}} />
              </Left>
              <Body>
                <TouchableOpacity onPress={() => { Linking.openURL('http://explorecianjur.phdstudio.id/') }}>
                  <Text style={{fontSize: 15, color: '#4CC7F3'}}>{data.website}</Text>
                </TouchableOpacity>
              </Body>
              <Right />
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="map" style={{fontSize: 20, color: '#4CC7F3'}} />
              </Left>
              <Body>
                <TouchableOpacity onPress={() => {
                  openMap({ latitude: data.latitude, longitude: data.longitude });
                }}>
                  <Text style={{fontSize: 15, color: '#4CC7F3'}}>Lihat Map</Text>
                </TouchableOpacity>
              </Body>
              <Right />
            </ListItem>

            <ListItem >
              {/* <Text>{data.content}</Text> */}
              <ScrollView style={{ flex: 1 }}>
                <HTML html={data.content} />
              </ScrollView>
            </ListItem>

          </List>
        </Content>
      </Container>
    )
  }
}

DetailView.propTypes = {
  data: PropTypes.object.isRequired
};

export default DetailView;
