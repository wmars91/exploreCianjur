import React,{Component} from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import ImageSlider from 'react-native-image-slider';
// import SplashScreen from 'react-native-splash-screen';

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

    static navigatorStyle = {
        navBarTransparent: true,
        drawUnderNavBar: true,
        navBarTextColor: '#ffffff'
    }

    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 2000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    componentDidMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        // SplashScreen.hide();
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
                        <TouchableOpacity onPress={ ()=> this.props.navigator.push({
                        screen: 'example.Tours',
                        title: 'Tours'
                        }) }>
                            <CardItem>
                            {/* <Icon active name="logo-googleplus" /> */}
                            <Image source={require('../img/Tour.png')} style={{width: 30, height: 30, marginRight: 10}} />
                            <Text>Wisata</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                            </CardItem>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ ()=> this.props.navigator.push({
                        screen: 'example.Food',
                        title: 'Food'
                        }) }>
                            <CardItem>
                            <Image source={require('../img/Food.png')} style={{width: 30, height: 30, marginRight: 10}} />
                            <Text>Kuliner</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                            </CardItem>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ ()=> this.props.navigator.push({
                        screen: 'example.Hotel',
                        title: 'Hotel'
                        })}>
                            <CardItem>
                            <Image source={require('../img/Hotel.png')} style={{width: 30, height: 30, marginRight: 10}} />
                            <Text>Hotel</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                </Content>
          </Container>
        );
    }
}