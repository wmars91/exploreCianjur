import React from 'react';
import {ListItem, Thumbnail, Body, Text} from 'native-base';
import { Tile } from 'react-native-elements';

export default FoodDetail = ({foods, navigator}) => (
    <ListItem
      onPress={()=>navigator.push({
        screen: 'example.FoodView',
        passProps: {
            foods: foods
        }
      })}
    >
      <Tile
        imageSrc={require('./img/1.jpg')}
        title={foods.title}
        // icon={{name: 'play-circle', type: 'font-awesome'}}  // optional
        titleStyle={{fontSize: 20}}
        featured
        activeOpacity={1}
        contentContainerStyle={{height: 70}}/>
    </ListItem>
)
