import React from 'react';
import {ListItem, Thumbnail, Body, Text} from 'native-base';

export default FoodDetail = ({foods, navigator}) => (
    <ListItem
      onPress={()=>navigator.push({
        screen: 'example.FoodView',
        passProps: {
            foods: foods
        }
      })}
    >
      <Thumbnail
        square
        size={80}
        source={{ uri: foods.image}}
      />
      <Body>
        <Text note>{foods.title}</Text>
      </Body>
    </ListItem>
)
