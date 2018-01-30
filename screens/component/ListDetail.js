import React from 'react';
import {View} from 'react-native';
import {ListItem, Thumbnail, Body, Text} from 'native-base';
import { Tile,Image,Title,TouchableOpacity,Divider } from '@shoutem/ui';

export default ListDetail = ({data, navigator}) => (
  <View style={{
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 30,
  }}>
    <TouchableOpacity
      onPress={()=>navigator.push({
        screen: 'example.DetailView',
        passProps: {
          data: data
        }
      })}
    >
      <Tile>
        <Image
          styleName="large-banner"
          source={{ uri: data.image }}
        />
        <View styleName="content">
          <Title>{data.title}</Title>
        </View>
      </Tile>
      <Divider styleName="line" />
    </TouchableOpacity>
  </View>
)
