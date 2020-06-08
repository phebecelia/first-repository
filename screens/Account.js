import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Left, Body, Right, Button, Thumbnail } from 'native-base';

export default class ListDividerExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>A</Text>
            </ListItem>                    
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy..</Text>
                </Body>
                <Right>
                  <Button bordered dark
                     onPress={() => this.props.navigation.navigate('ProfileOne')}
                  >
                    <Text style = {{color: 'black'}}>View</Text>
                  </Button>
                </Right>
              </ListItem>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy..</Text>
                </Body>
                <Right>
                  <Button bordered dark
                     onPress={() => this.props.navigation.navigate('ProfileTwo')}
                  >
                    <Text style = {{color: 'black'}}>View</Text>
                  </Button>
                </Right>
              </ListItem>
            <ListItem itemDivider>
              <Text>B</Text>
            </ListItem>  
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Button bordered dark
                     onPress={() => this.props.navigation.navigate('ProfileThree')}
                  >
                    <Text style = {{color: 'black'}}>View</Text>
                  </Button>
                </Right>
              </ListItem>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy..</Text>
                </Body>
                <Right>
                  <Button bordered dark 
                    onPress={() => this.props.navigation.navigate('ProfileFour')}
                  >
                    <Text style = {{color: 'black'}}>View</Text>
                  </Button>
                </Right>
              </ListItem>
            <ListItem itemDivider>
              <Text>C</Text>
            </ListItem>  
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Button bordered dark
                     onPress={() => this.props.navigation.navigate('ProfileFive')}
                  >
                    <Text style = {{color: 'black'}}>View</Text>
                  </Button>
                </Right>
              </ListItem>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Button bordered dark
                     onPress={() => this.props.navigation.navigate('ProfileSix')}
                  >
                    <Text style = {{color: 'black'}}>View</Text>
                  </Button>
                </Right>
              </ListItem>
            <ListItem itemDivider>
              <Text>D</Text>
            </ListItem>  
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Button bordered dark
                     onPress={() => this.props.navigation.navigate('ProfileSeven')}
                  >
                    <Text style = {{color: 'black'}}>View</Text>
                  </Button>
                </Right>
              </ListItem>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Button bordered dark
                     onPress={() => this.props.navigation.navigate('ProfileEight')}
                  >
                    <Text style = {{color: 'black'}}>View</Text>
                  </Button>
                </Right>
              </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}