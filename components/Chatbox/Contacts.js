import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Contact from './Contact';



const Contacts = () => {
  return (
    <View style={tw`px-3 my-2 mt-4`}>
      <Contact name='Thanh sau' messenger='hi' date='3 minutes ago' />
    </View>
  );
};

export default Contacts;
