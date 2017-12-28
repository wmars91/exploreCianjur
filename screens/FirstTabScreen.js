import React,{Component} from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import ImageSlider from 'react-native-image-slider';

export default class FirtsTabScreen extends Component{

    constructor(props) {
        super(props);
 
        this.state = {
            position: 1,
            interval: null,
            imageList:[
                'http://wpexplorer-demos.com/status/wp-content/uploads/sites/101/2016/06/jungle-740x340.jpg',
                'http://explorecianjur.phdstudio.id/wp-content/uploads/2016/06/photo-1465877783223-4eba513e27c6.jpg',
                'http://explorecianjur.phdstudio.id/wp-content/uploads/2016/06/peppers.jpg'
            ]
        };
    }

    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 2000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render(){
        return(
            <Container>
                <Content>
                    <ImageSlider 
                            images={this.state.imageList}
                            position={this.state.position}
                            onPositionChanged={position => this.setState({position})}
                        />
                    <Card>
                        <CardItem>
                        <Icon active name="logo-googleplus" />
                        <Text>Wisata</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                        </CardItem>
                        <CardItem>
                        <Icon active name="logo-googleplus" />
                        <Text>Kuliner</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                        </CardItem>
                        <CardItem>
                        <Icon active name="logo-googleplus" />
                        <Text>Hotel</Text>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                        </CardItem>
                    </Card>
                </Content>
          </Container>
        );
    }
}