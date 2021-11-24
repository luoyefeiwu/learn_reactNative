import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    backgroundColor: '#fff',
    height: 100,
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
    // width: Dimensions.get('window').width - 120,
    display: 'flex',
    justifyContent: 'center',
    marginRight: 100,
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

export default styles;
