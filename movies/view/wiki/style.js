import {StyleSheet} from 'react-native';

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

export default styles;
