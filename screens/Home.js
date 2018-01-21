import React,{Component} from 'react';
import { TouchableOpacity,ListView,FlatList } from 'react-native';
import { Container, Header, Content, Text, Icon, Right } from 'native-base';
import Slideshow from 'react-native-slideshow';
import { Divider,Caption,Image,Title,View,Card,Subtitle } from '@shoutem/ui';

export default class Home extends Component{

    constructor(props) {
        super(props);
 
        this.state = {
            position: 1,
            interval: null,
            imageList:[
                {
                  title: 'Title 1',
                  caption: 'Caption 1',
                  url: 'http://wpexplorer-demos.com/status/wp-content/uploads/sites/101/2016/06/jungle-740x340.jpg',
                }, {
                  title: 'Title 2',
                  caption: 'Caption 2',
                  url: 'http://explorecianjur.phdstudio.id/wp-content/uploads/2016/06/photo-1465877783223-4eba513e27c6.jpg',
                }, 
                {
                  title: 'Title 3',
                  caption: 'Caption 3',
                  url: 'http://explorecianjur.phdstudio.id/wp-content/uploads/2016/06/peppers.jpg',
                }
              ],
            kategori: [
                {
                    image: 'https://image.freepik.com/free-photo/red-pink-tower-blue-hat-old-vintage-camera-and-shells-over-wooden-floor-on-sunshine-blue-sky-and-ocean-background_1421-402.jpg',
                    title: '     Wisata',
                    screen: 'example.Tours',
                    titleHeader: 'Wisata'
                },
                {
                    image: 'https://image.freepik.com/free-photo/table-with-ingredients-to-prepare-italian-pasta_23-2147606548.jpg',
                    title: '     Kuliner',
                    screen: 'example.Food',
                    titleHeader: 'Kuliner'
                },
                {
                    image: 'https://image.freepik.com/free-photo/hotel-bell_1203-2898.jpg',
                    title: '     Hotel',
                    screen: 'example.Hotels',
                    titleHeader: 'Hotel'
                }
            ]
        };
    }

    static navigatorStyle = {
        navBarTransparent: true,
        drawUnderNavBar: true,
        navBarTextColor: '#ffffff'
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
              this.setState({
                position: this.state.position === this.state.imageList.length ? 0 : this.state.position + 1
              });
            }, 2000)
        });
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
                    <Slideshow 
                        onPress={()=> this.props.navigator.push({
                            screen: 'example.SlideshowView'
                          })}
                        dataSource={this.state.imageList}
                        position={this.state.position}
                        onPositionChanged={position => this.setState({ position })} 
                    />
                    <Divider styleName="section-header">
                        <Caption>KATEGORI</Caption>
                    </Divider>
                    <FlatList 
                        key="flatList"
                        horizontal={true}
                        data={this.state.kategori}
                        keyExtractor={(item, index) => (`${item}--${index}`)}
                        renderItem = {({ item, index }) => 
                            <View>
                                <TouchableOpacity
                                    onPress={()=> this.props.navigator.push({
                                        screen: item.screen,
                                        title: item.titleHeader
                                      })}
                                >
                                    <Card> 
                                        <Image
                                            styleName="medium-square"
                                            source={{uri: item.image }}
                                        />
                                        <View styleName="content">
                                            <Subtitle>{item.title}</Subtitle>
                                        </View>
                                    </Card>
                                </TouchableOpacity>
                            </View>
                    }/>

                </Content>
          </Container>
        );
    }
}