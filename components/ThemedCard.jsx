import { StyleSheet, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Color'

const ThemedCard = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View
        style={[{ backgroundColor: theme.uiBackground}, styles.card, style]}
        {...props}
    />
  )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        elevation: 2
    }
})