import { StyleSheet } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const Analytics = () => {
  return (
    <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.heading}>
            Analytics will be displayed here
        </ThemedText>
        <Spacer height={60}/>

        <ThemedText>Best selling item</ThemedText>
        <Spacer height={15}/>
        <ThemedText>Most viewed item</ThemedText>
        <Spacer height={15}/>
        <ThemedText>Highest revenue item</ThemedText>
        <Spacer height={15}/>
    </ThemedView>
  )
}

export default Analytics

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