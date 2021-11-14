import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
// const getFullName = (firstName, secondName, thirdName) => {
//   return firstName + ' ' + secondName + ' ' + thirdName;
// };

// const Cat = () => {
//   return <Text>Hello,I am {getFullName('Rum', 'Tum', 'Tugger')}!</Text>;
// };

const Cat = () => {
  return (
    <View>
      <Text>Hello, I am...</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Name me!"
      />
    </View>
  );
};

export default Cat;
