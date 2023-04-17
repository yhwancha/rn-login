import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default SignInScreen = () => {
  return (
    <View style={styles.baseText}>
      <Text style={styles.baseText}>sign in</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  baseText: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})