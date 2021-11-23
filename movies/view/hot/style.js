import {StyleSheet} from 'react-native';
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

export default styles;
