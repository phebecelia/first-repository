import React, {Component} from 'react';
import {  Card, Title, List } from 'react-native-paper';
import { View, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import moment from 'moment';
import HTML from 'react-native-render-html';
import base64 from 'react-native-base64'

class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
        isloading: true,
        post: [],
        };
    }

    componentDidMount() {
    this.fetchPost();
    }

    async fetchPost() {
        // let post_id = this.props.navigation.getParam('post_id');
        let postId = this.props.route.params; // contoh output json: "post_id": 206
        let headers = new Headers()
        let wpApiUsername = "api"
        let wpApiPassword = "epaP YADG VK1I oa2w WtKk qR8i"
        let auth = `${wpApiUsername}:${wpApiPassword}`
        headers.append("Authorization", "Basic " + base64.encode(auth))

        // notes: karena output nya json, maka harus diakses dengan metode object
        // contoh: postId.post_id
        const response = await fetch(
            `https://phebecelia.id/wp-json/wp/v2/posts?_embed&include=${postId.post_id}`, {
                headers: headers
            }
        );
        const post = await response.json();

        this.setState({
            post: post,
            isloading: false,
        });
    }

    render() {
    let post = this.state.post;
    if (this.state.isloading) {

        return (
            <View
                style={{
                paddingVertical: 20,
                borderTopWidth: 1,
                borderColor: '#CED0CE' }}
            >
            <ActivityIndicator animating size="large" />
            </View>
        );
    }
        
        return (
            <ScrollView>
            <Card>
                <Card.Content>
                    <Title>{post[0].title.rendered} </Title>
                    <List.Item
                        title={`${post[0]._embedded.author[0].name}`}
                        description={`${post[0]._embedded.author[0].description}`}
                        
                    />
                    <List.Item
                        title={`Published on ${moment(
                        post[0].date,
                        'YYYYMMDD'
                        ).fromNow()}`}
                    />
                </Card.Content>
                <Card.Cover source={post[0].jetpack_featuren_media_url ? {uri: post[0].jetpack_featuren_media_url}: null} />
                <Card.Content>
                    <HTML html={post[0].content.rendered}
                        imagesInitialDimensions={{
                            width: Dimensions.get('window').width,
                            height: Dimensions.get('window').width * 2 }}
                    />
                </Card.Content>
            </Card>
            </ScrollView>
        );
    }
}

export default (SinglePost);
