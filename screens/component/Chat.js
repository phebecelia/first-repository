import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';
import email from 'react-native-email';
import { Container, Content, List, ListItem, Left, Icon, Body } from 'native-base';

class ChatScreen extends Component {
    handleEmail = () => {
        const to = ['phebe.celia@gmail.com'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            subject: 'Show how to use',
            body: 'Some body right here'
        }).catch(console.error)
      }

render() {
    return (
        <Container>
            <Content>
              <List>
                <ListItem icon onPress={this.handleEmail}>
                    <Left>
                        <Icon
                            type = "Feather"
                            active name = "help-circle"
                            style = {{fontSize: 24 }}
                        />
                    </Left>
                    <Body>
                        <Text>Email</Text>
                    </Body>
                </ListItem>

                <ListItem icon onPress={() => { Linking.openURL( 'http://api.whatsapp.com/send?phone=62' + 85771613161 ); }}>
                <Left>
                  <Icon
                    type = "Feather"
                    active name = "info"
                    style = {{fontSize: 23 }}
                  />
                </Left>
                <Body> 
                  <Text>Whatsapp</Text>
                </Body>
              </ListItem>

              <ListItem icon onPress = {() => this.props.navigation.navigate('LoginScreen')}>
                    <Left>
                        <Icon
                            type = "Feather"
                            active name = "help-circle"
                            style = {{fontSize: 24 }}
                        />
                    </Left>
                    <Body>
                        <Text>Email</Text>
                    </Body>
                </ListItem>

                </List>
            </Content>
        </Container>
        );
    }
}

export default (ChatScreen);