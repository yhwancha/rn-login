import { Button, Text, View } from 'react-native';
import { InputBox } from '../components/inputBox';
import API from '../utils/api';

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
        onPress={async () => {
          try {
            await API.get('/login').then((res) => {
              console.log(res.data);
              navigation.navigate('signedIn')
            }).catch((err) => {
              console.error(err);
            })
          } catch (err) {
            console.log(err);
          }
        }}
      />
    </View>
  )
}
