import React, { Component } from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import HTML from 'react-native-render-html';
import moment from 'moment';

class CategoriesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        this.fetchPost();       
    }
    
    async fetchPost() {
        let categorieid = this.props.route.params; 
        const response = await fetch(`https://phebecelia.id/wp-json/wp/v2/posts?categories=${categorieid.categorie_id}`
        );
        const post = await response.json();
        
        this.setState({posts: post});
    }

    render() {
       let categorie_title = this.props.route.params.title
    
        return (
            <View>
                <Title style={{marginLeft: 30}}>
                    {categorie_title}
                </Title>
                <FlatList 
                    data={this.state.posts} 
                    renderItem={({item}) => (
                        <TouchableOpacity 
                            onPress={() => 
                            this.props.navigation.navigate('SinglePost', {
                            post_id: item.id,})
                        }>
                        <Card>
                            <Card.Content>
                                <Title>{item.title.rendered}</Title>
                                <Paragraph>
                                    Published on {moment(item.date, 'YYYYMMDD').fromNow()}
                                </Paragraph>
                            </Card.Content>
                            <Card.Cover source={{uri: item.jetpack_featured_media_url}} />
                            <Card.Content>
                                <HTML html={item.excerpt.rendered} />
                            </Card.Content>
                        </Card>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => `key-${item.id}` }
                    />
            </View>
        );
    }
}
 
export default (CategoriesList);