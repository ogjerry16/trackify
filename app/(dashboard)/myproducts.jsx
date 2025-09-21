import { StyleSheet, Text } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import { useUser } from '../../hooks/useUser'
import { supabase } from '../../lib/supabase'

import ProductCard from '../../components/ProductCard'

const Products = () => {
    const { user, logout } = useUser()
    async function showData() {
        let { data: products, error } = await supabase
        .from('products')
        .select('*')
        if (error) console.error("Error is: ", error)
        console.log("This has run, waiting for the one below")
        console.log("Products: ", products)
    }

  return (
    <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.heading}>
            Products will be displayed here
        </ThemedText>
        <ThemedText>
            Your phone number is {user?.user_metadata?.phone_number ?? "No phone set"}
        </ThemedText>
        <Spacer />
        <Spacer height={50} />
        <ProductCard />
        <Spacer height={70} />
        <ThemedButton onPress={showData}><ThemedText>View data</ThemedText></ThemedButton>
        <Spacer height={70} />
    
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