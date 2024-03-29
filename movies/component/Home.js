import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  render() {
    const {width} = Dimensions.get('window');
    const {itemWidth} = (width - 20) / 3;
    return (
      <View style={styles.container}>
        <View>
          <StatusBar barStyle="light-content" />
          <Image
            source={require('./../resource/images/bj.png')}
            style={{width: width}}
          />
          <TextInput
            style={[styles.search, {top: width * 0.45}]}
            placeholder="请输入搜索内容"
            underlineColorAndroid="#fff"
          />
        </View>
        <ScrollView style={styles.content}>
          <View style={styles.list}>
            {this.state.categories.map((item, index) => {
              return (
                <View key={item.id} style={[{width: itemWidth}, styles.item]}>
                  <Image
                    source={require('./../resource/images/4.jpg')}
                    style={[
                      {
                        width: (width - 20) / 3 - 20,
                        height: (width - 20) / 3 - 20,
                      },
                      styles.itemImg,
                    ]}
                  />
                  <View>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }

  componentDidMount() {
    this.bind();
  }

  bind() {
    let categories = [];
    for (let i = 0; i < 10; i++) {
      categories.push({id: i, title: '京东' + i});
    }
    this.setState({
      categories: categories,
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#eee',
  },
  search: {
    position: 'absolute',
    left: 20,
    right: 20,
    height: 40,
    lineHeight: 40,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    marginTop: 5,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    display: 'flex',
  },
  itemImg: {
    marginTop: 10,
    marginLeft: 5,
    borderRadius: 20,
  },
  itemTitle: {
    lineHeight: 30,
    height: 30,
    textAlign: 'center',
  },
});

export default Home;
