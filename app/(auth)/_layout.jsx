import { Slot, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '../../constants/Color'
import { useColorScheme } from 'react-native'
import GuestOnly from '../../components/auth/GuestOnly'

const AuthLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (

        <GuestOnly>
            <StatusBar style="auto" />
            <Stack screenOptions={{ 
                animation: 'none',
                headerStyle: {backgroundColor: theme.navBackground},
                headerTintColor: theme.title,
                }}/>
        </GuestOnly>
    )

}

        
        
export default AuthLayout