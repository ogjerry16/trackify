import {StyleSheet, Text, View, Image, useColorScheme} from 'react-native'
import { Link } from 'expo-router'

import { Colors } from '../constants/Color' 
import ThemedView from '../components/ThemedView'

const Home = () => {

    const colorScheme = useColorScheme()

    const theme = Colors[colorScheme] ?? Colors.light
    
    return (
        <ThemedView style={[styles.container, { backgroundColor: theme.background}]} safe={true}>
            <Text style={[styles.title, { color: theme.text}]}>About</Text>

            <Link href='/' style={{ marginVertical: 20, color: theme.text}}>Back Home</Link>
        </ThemedView>

    )

}
        
        
export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})