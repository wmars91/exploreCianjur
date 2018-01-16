import React from 'react';
import {ListItem, Thumbnail, Body, Text} from 'native-base';
import { Tile,Image,View,Title,TouchableOpacity } from '@shoutem/ui';

export default FoodDetail = ({foods, navigator}) => (
  <ListItem>
      <TouchableOpacity
        onPress={()=>navigator.push({
          screen: 'example.FoodView',
          passProps: {
              foods: foods
          }
        })}
      >
      <Tile>
        <Image
          styleName="large-banner"
          source={{ uri: foods.image }}
        />
        <View styleName="content">
          <Title>{foods.title}</Title>
        </View>
      </Tile>
    </TouchableOpacity>
  </ListItem>
)
