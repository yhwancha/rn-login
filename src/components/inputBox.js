import { StyleSheet, TextInput, View } from "react-native"

export const InputBox = (props) => {
  return (
    <View style={styles.textFormTop}>
      <TextInput placeholder={props.name} />
    </View>
  )
}

const styles = StyleSheet.create({
  textFormTop: {
    borderWidth: 2,
    borderColor: 'black',
  },
})