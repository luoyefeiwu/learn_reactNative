import {View, Image, KeyboardAvoidingView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},
  list: {
    height: 60,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 6,
  },
  leftIcon: {marginLeft: 10, flex: 1},
  rightIcon: {flex: 1},
  content: {fontSize: 16, color: 'white', flex: 9},
});
export default styles;
