import { StyleSheet, Text, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'
import { Colors } from '../../constants/Color'


// themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useUser } from '../../hooks/useUser'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const { login } = useUser()

  const colorScheme = useColorScheme()
//   Hooks must be called:
// At the top level of a function component or a custom hook.
// Not inside loops, conditionals, or nested functions.

  const handleSubmit = async () => {
    setError(null)

    try {
      await login(email, password)
      console.log("Login successful")
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <ThemedView style={styles.container}>

      <Spacer />
      <ThemedText title={true} style={styles.title}>Login to your account</ThemedText>

      <ThemedTextInput
        style={{ width: '80%', marginBottom: 20 }}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />

      <ThemedTextInput
        style={{ width: '80%', marginBottom: 20 }}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>Login</Text>
      </ThemedButton>{/* Short-circuit evaluation: A && B means: if A is truthy -> return B. if A is falsy -> return A */}

      <Spacer />
      {error && <Text style={styles.error}>{error}</Text>}

      <Spacer height={50} />
      <Link href="/signup">
        <ThemedText style={{ textAlign: 'center' }}>Don't have an account? Sign up</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30,
        fontWeight: 'bold'
    },
    error: {
      color: Colors.warning,
      padding: 10,
      backgroundColor: '#f5c1c8',
      borderColor: Colors.warning,
      borderWidth: 1,
      borderRadius: 6,
      marginHorizontal: 10,
    }
    
})