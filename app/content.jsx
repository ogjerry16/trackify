import {StyleSheet, Text, View, Image} from 'react-native'
import { Link } from 'expo-router'

import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const Content = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title} title={true}>Content wil be uploaded soon</ThemedText>
            <Spacer height={15} />
            <Link href='/' style={styles.link}><ThemedText>Back Home</ThemedText></Link>
        </ThemedView>

    )

}

        
        
export default Content

const styles = StyleSheet.create({

    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})

