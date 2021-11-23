import React, {Component} from 'react';
import {FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';
import {getSetHostListAction, getSetRefreshingAction} from './actionCreator';

class Hot extends Component {
  constructor(props) {
    super(props);
    this.handleListRefresh = this.handleListRefresh.bind(this);
  }
  render() {
    return (
      <FlatList
        data={this.props.list}
        keyExtractor={(item, index) => item.id}
        refreshing={this.props.refreshing}
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
                  // alert(item.title);
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
    for (let i = this.props.list.length; i < this.props.list.length + 20; i++) {
      arr.push({
        id: i,
        title: '我是最帅的标题' + i,
        desc: '我是最棒的描述哈哈哈哈哈哈哈哈哈哈你看到了没有嘻嘻嘻嘻嘻嘻' + i,
      });
    }
    this.props.setHostList(arr);
  }
  handleListRefresh() {
    this.getList();
  }
}
const manState = state => {
  return {
    list: state.hot.list,
    refreshing: state.hot.refreshing,
  };
};

const mapDispath = dispath => {
  return {
    setHostList(data) {
      const action = getSetHostListAction(data);
      dispath(action);
    },
    setRefreshing(data) {
      const action = getSetRefreshingAction(data);
      dispath(action);
    },
  };
};

export default connect(manState, mapDispath)(Hot);
