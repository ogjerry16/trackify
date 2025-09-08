import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

// Themed Components
import ThemedLogo from '../components/ThemedLogo'
import ThemedView from '../components/ThemedView'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo  style={styles.img} />
            <Spacer height={10} />
            
            <ThemedText style={styles.title} title={true}>Welcome to React Native by Net Ninja</ThemedText>
            <Spacer height={10} />
            <ThemedText>About</ThemedText>
            <Spacer height={50} />

            {/* <View style={styles.card}>
                <ThemedText>Hello, This is a Card</ThemedText>
            </View> */}

            <Link href='/about' style={styles.link}><ThemedText>To the About Page Please</ThemedText></Link>
            <Link href='/content' style={styles.link}><ThemedText>Let's See what Content we Have</ThemedText></Link>
            <Spacer height={50} />
            <Link href='/login' style={styles.link}><ThemedText>Login</ThemedText></Link>
            <Link href='/signup' style={styles.link}><ThemedText>Signup</ThemedText></Link>
            <Spacer height={50} />
            <Link href='/products' style={styles.link}><ThemedText>Products</ThemedText></Link>
            <Link href='/debts' style={styles.link}><ThemedText>Debts</ThemedText></Link>
            <Link href='/analytics' style={styles.link}><ThemedText>Analytics</ThemedText></Link>


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
    },
    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow: '0px 0px rgba(0,0,0,.2)'
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})