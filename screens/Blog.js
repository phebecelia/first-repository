import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import {  Card, Title, Paragraph, Headline } from 'react-native-paper';
import HTMLRender from 'react-native-render-html';
import moment from 'moment';
import base64 from 'react-native-base64'

class BlogScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        lastestpost: []
      };
  };

  componentDidMount() {
    this.fetchLastestPost();
  }

  async fetchLastestPost() {
    let headers = new Headers()
    let wpApiUsername = "api"
    let wpApiPassword = "epaP YADG VK1I oa2w WtKk qR8i"
    let auth = `${wpApiUsername}:${wpApiPassword}`

    headers.append("Authorization", "Basic " + base64.encode(auth))

    // console.log(headers)

    const response = await fetch(
      'https://phebecelia.id/wp-json/wp/v2/posts/', {
        headers: headers
      }
    );
      const post = await response.json();
      this.setState({ lastestpost: post});
  }

  render() {
    return (
      <View>
        <Headline style={{ marginLeft: 30 }}>Lastest Post</Headline>
          <FlatList
            data={this.state.lastestpost}
            renderItem={({ item }) => (
              <Card
                style={{
                  shadowOffset: { width: 5, height: 5 },
                  width: '90%',
                  borderRadius: 12,
                  alignSelf: 'center',
                  marginBottom: 10 }}
              >
                <TouchableOpacity
                  onPress={() =>
                  this.props.navigation.navigate('SinglePost', {
                    post_id: item.id,})
                  }
                >
                <Card.Content>
                  <Title>{item.title.rendered}</Title>
                  <Paragraph>Published on {moment(item.date).fromNow()}</Paragraph>
                </Card.Content>
                <Card.Cover
                  source={item.jetpack_featured_media_url ? {uri: item.jetpack_featured_media_url} : null}
                />
                <Card.Content>
                  <HTMLRender html={item.excerpt.rendered} />
                </Card.Content>
                </TouchableOpacity>
              </Card>  
            )}
            keyExtractor={(item) => `key-${item.id}` }
          />
      </View>
    );
  }
}

export default (BlogScreen);