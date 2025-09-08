import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import { Colors } from "../../constants/Color"
import { Ionicons } from "@expo/vector-icons"
import UserOnly from "../../components/auth/UserOnly"


const DashboardLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
  return (
    <UserOnly>
    <Tabs 
        screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: theme.background,
                height: 100
             },
             tabBarActiveTintColor: theme.iconColorFocused,
             tabBarInactiveTintColor: theme.iconColor
        }}
    >
        <Tabs.Screen 
        name="products" 
        options={{ title: "Products", tabBarIcon: ({ focused }) => (
        <Ionicons 
        name={ focused ? "pricetag" : "pricetag-outline"}
        size={24} 
        color={focused ? theme.iconColorFocused : theme.iconColor} />) }} />

        <Tabs.Screen 
        name="debts" 
        options={{ title: "Debts", tabBarIcon: ({ focused }) => (
        <Ionicons 
        name={ focused ? "wallet" : "wallet-outline"} 
        size={24} 
        color={focused ? theme.iconColorFocused : theme.iconColor} />) }} />

        <Tabs.Screen 
        name="analytics" 
        options={{ title: "Analytics", tabBarIcon: ({ focused }) => (
        <Ionicons 
        name={ focused ? "bar-chart" : "bar-chart-outline"} 
        size={24} 
        color={focused ? theme.iconColorFocused : theme.iconColor} />) }} />

    </Tabs>
    </UserOnly>
  )
}

export default DashboardLayout

