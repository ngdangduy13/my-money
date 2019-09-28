import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';

const LoginBase = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export const Login = React.memo(LoginBase);
