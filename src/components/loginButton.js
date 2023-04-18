import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, View } from "react-native"

export const LoginButton = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity 
        style={{ alignItems: 'center' }}
        onPress={() => navigation.navigate('signedIn')}
      >
        <Text>로그인</Text>
      </TouchableOpacity>
    </View>
  )
}