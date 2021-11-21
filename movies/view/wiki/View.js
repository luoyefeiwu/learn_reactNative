import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './style';
import {getSetCategoriesAction} from './actionCreator';

class Wiki extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {width} = Dimensions.get('window');
    const {itemWidth} = (width - 20) / 3;
    return (
      <View style={styles.container}>
        <View>
          <StatusBar barStyle="light-content" />
          <Image
            source={require('../../resource/images/bj.png')}
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
            {this.props.categories.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={item.id}
                  onPress={() =>
                    this.props.navigation.navigate('Settings', {id: item.id})
                  }>
                  <View style={[{width: itemWidth}, styles.item]}>
                    <Image
                      source={require('../../resource/images/4.jpg')}
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
                </TouchableWithoutFeedback>
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
      categories.push({id: i, title: '小米手环' + i});
    }
    this.props.setCategories(categories);
  }
  // handleItemClick() {
  //   this.props.navigation.navigate('Settings');
  // }
}

const manState = state => {
  return {
    categories: state.wiki.categories,
  };
};

const mapDispath = dispath => {
  return {
    setCategories(data) {
      //const action = {type: 'SET_CATEGORIES', data: data};
      const action = getSetCategoriesAction(data);
      dispath(action);
    },
  };
};

export default connect(manState, mapDispath)(Wiki);
