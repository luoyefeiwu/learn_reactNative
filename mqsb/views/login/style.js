import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'relative',
  },
  itemImage: {
    width: Dimensions.get('window').width,
  },
  title: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    top: 0,
    left: 0,
    bottom: 0,
  },
  area: {
    fontSize: 38,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 0, height: 2},
    fontWeight: '500',
  },
  system: {
    fontSize: 24,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '500',
  },
  body: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  user: {
    height: 40,
    borderColor: 'rgb(46, 171, 242)',
    borderWidth: 1,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'red',
  },
  password: {
    marginTop: 20,
    marginBottom: 20,
    height: 40,
    borderColor: 'rgb(46, 171, 242)',
    borderWidth: 1,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default styles;
