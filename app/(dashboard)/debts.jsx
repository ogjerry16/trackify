import { StyleSheet } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const Debts = () => {
  return (
    <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.heading}>
            Debts will be displayed here
        </ThemedText>
        <Spacer />
        <ThemedText>Customers Debt</ThemedText>
        <Spacer height={15} />
        <ThemedText>Supplier Debt</ThemedText>
    </ThemedView>
  )
}

export default Debts

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