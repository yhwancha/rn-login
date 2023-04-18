import { StyleSheet, Text, View } from 'react-native';

export const SignedIn = () => {
  return (
    <View style={styles.baseText}>
      <Text style={styles.baseText}>login success! welcome</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  baseText: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})