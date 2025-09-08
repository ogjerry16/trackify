import { StyleSheet, Pressable} from 'react-native'
import { Colors } from '../constants/Color'

const ThemedButton = ({ style, ...props}) => {
  return (
    <Pressable 
        style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
        {...props}
    /> 
  )
}

export default ThemedButton

const styles = StyleSheet.create({
    btn: {
      backgroundColor: Colors.primary,
      padding: 15,
      borderRadius: 15,
    },
    pressed: {
      opacity: 0.8,
    }
})