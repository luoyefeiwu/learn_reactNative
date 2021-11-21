import React, {Component} from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class HotList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      refreshing: false,
    };
    this.handleListRefresh = this.handleListRefresh.bind(this);
  }
  render() {
    return (
      <FlatList
        data={this.state.list}
        keyExtractor={(item, index) => item.id}
        refreshing={this.state.refreshing}
        onRefresh={this.handleListRefresh}
        renderItem={({item}) => {
          return (
            <View style={styles.item}>
              <Image
                source={require('../../resource/images/3.jpg')}
                style={styles.itemImage}
              />
              <TouchableOpacity
                onPress={() => {
                  alert(item.title);
                }}>
                <View style={styles.info}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.desc}>{item.desc}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    );
  }

  componentDidMount() {
    this.getList();
  }

  getList() {
    let arr = [];
    for (let i = this.state.list.length; i < this.state.list.length + 20; i++) {
      arr.push({
        id: i,
        title: '我是最帅的标题' + i,
        desc: '我是最棒的描述哈哈哈哈哈哈哈哈哈哈你看到了没有嘻嘻嘻嘻嘻嘻' + i,
      });
    }
    this.setState(prevState => {
      return {
        list: [...prevState.list, ...arr],
        refreshing: false,
      };
    });
  }

  handleListRefresh() {
    this.setState({
      refreshing: true,
    });
    this.getList();
  }
}
const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    backgroundColor: '#fff',
  },
  itemImage: {
    height: 80,
    width: 80,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },
  info: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    lineHeight: 18,
    fontSize: 14,
  },
  desc: {
    lineHeight: 18,
    fontSize: 12,
  },
});
