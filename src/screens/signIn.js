import { Button, Text, View } from 'react-native';
import { InputBox } from '../components/inputBox';

export const SignIn = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      <InputBox name={'id'}></InputBox>
      <InputBox name={'password'}></InputBox>
      <Button
        title="로그인"
        style={{ alignItems: 'center' }}
        onPress={() => navigation.navigate('signedIn')}
      />
    </View>
  )
}
