import { StyleSheet, Text } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { useUser } from '../../hooks/useUser'
import ThemedButton from '../../components/ThemedButton'

const Products = () => {
    const { logout, user } = useUser()
 

  return (
    <ThemedView style={styles.container}>
        <ThemedText>
            Users' email: {user?.email}
        </ThemedText>
        <ThemedText title={true} style={styles.heading}>
            Products will be displayed here
        </ThemedText>
        <Spacer />
       <ThemedButton onPress={logout}>
           <Text style={{ color: '#f2f2f2' }}>Logout</Text>
       </ThemedButton>
    </ThemedView>
  )
}

export default Products

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})