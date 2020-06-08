import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Dimensions, ImageBackground, Image, Animated } from 'react-native';

const {height, width} = Dimensions.get('window');

const mocks = [
    {
        id: 1,
        user: {
          name: 'Lelia Chavez',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        saved: true,
        location: 'Santorini, Greece',
        temperature: 34,
        title: 'Santorini',
        description: 'Santorini',
        rating: 4.3,
        reviews: 3212,
        preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        ]
      },
      {
        id: 2,
        user: {
          name: 'Lelia Chavez',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        saved: false,
        location: 'Loutraki, Greece',
        temperature: 34,
        title: 'Loutraki',
        description: 'Athens',
        rating: 4.6,
        reviews: 3212,
        preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
        ]
      },
      {
        id: 3,
        user: {
          name: 'Lelia Chavez',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        saved: true,
        location: 'Santorini, Greece',
        temperature: 34,
        title: 'Santorini',
        description: 'Santorini',
        rating: 3.2,
        reviews: 3212,
        preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        ]
      },
      {
        id: 4,
        user: {
          name: 'Lelia Chavez',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        location: 'Loutraki, Greece',
        temperature: 34,
        title: 'Loutraki',
        description: 'Athens',
        rating: 5,
        reviews: 3212,
        preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
        images: [
          'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
        ]
      },
]

class Articles extends Component {
    scrollX = new Animated.Value(0);

    renderDots () {
        const { HomePicts } = this.props;
        const dotPosition = Animated.divide(this.scrollX, width);
        return (
            <View style = { styles.flex, {justifyContent:'center',marginTop: (15), flexDirection: 'row', alignItems: 'center'} }>
                {HomePicts.map ((item, index) => {
                    const borderWidth = dotPosition.interpolate ({
                        inputRange: [index -1, index, index + 1],
                        outputRange: [0, 2.5, 0],
                        extrapolate: 'clamp'
                    });
                    return (
                        <Animated.View 
                            key={`step-${item.id}`}
                            style = {[ styles.dots, styles.activeDots, {borderWidth: borderWidth} ]}
                        />
                    )
                })}
            </View>
        )
    }

    renderHomePicts = () => {
        return (
            <View style = {styles.flex, styles.column}>
                <FlatList 
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    decelerationRate={0}
                    snapToAlignment="center"
                    style={{ height: 280 }}
                    data={this.props.HomePicts}
                    keyExtractor={(item, index) => `${item.id}`}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
                    renderItem={({ item }) => this.renderHomePict(item)}
                />
                {this.renderDots()}
            </View>
        );
    }

    renderHomePict = item => {
        return (
            <ImageBackground 
                style = {styles.flex, styles.picture}
                imageStyle = {{borderRadius: 12}}
                source = {{uri: item.preview}}   
            >
                <View style = { styles.row }>
                    <View style = {{flex: 0}}>
                        <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
                    </View>
                    <View style = {styles.column, {flex:2, paddingHorizontal: 18}}>
                        <Text style ={{color:'white', fontWeight: 'bold'}}> {item.user.name} </Text>
                        <Text style ={{color:'white'}}> {item.location} </Text>
                    </View>
                    <View style = {{flex:0, justifyContent: 'center', alignItems: 'flex-end'}}>
                        <Text style = {styles.rating}> {item.rating} </Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }

    render() {
        return (
            <ScrollView>
                {this.renderHomePicts()}
            </ScrollView>
        )
    }
}

Articles.defaultProps = {
    HomePicts: mocks
};

export default (Articles);

const styles = StyleSheet.create ({
    flex: {
        flex:1,
    },
    column: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row'
    },
    picture: { 
        width: width - 25,
        borderRadius: 12, 
        marginHorizontal: 10,
        paddingHorizontal: 36,
        paddingVertical: 24,
        overflow: 'visible',
    },
    pictures: {
        justifyContent: 'space-between',
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginTop: 5,
    },
    rating: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold'
    },
    dots: {
        width: 10,
        height: 10,
        backgroundColor: '#DCE0E9', 
        borderRadius: 6,
        borderColor: 'transparent',
        borderWidth: 2,
        marginHorizontal: 6,
    },
    activeDots: {
        width: 14,
        height: 14,
        borderRadius: 7,
        borderColor:  '#007BFA',
    }   
})