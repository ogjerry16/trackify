import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'



// themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { Colors } from '../../constants/Color'
import { useUser } from '../../hooks/useUser'
    

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [name, setName] = useState('')
  const [phoneNo, setPhoneNo] = useState('')

  const { signup } = useUser()

  const handleSubmit = async () => {
    try {
      await signup(email, password, name, phoneNo)
      console.log("The account has been created successfully.")
    } catch (error) {
      console.log("Signup Failed:", error)
      setError(error.message)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.title}>Create a new account</ThemedText>
        
        <ThemedTextInput
          style={{ width: '80%', marginBottom: 20 }}
          placeholder="Full Name *"
          onChangeText={setName}
          value={name}
      />
  
        <ThemedTextInput
          style={{ width: '80%', marginBottom: 20 }}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />
        
        <ThemedTextInput
          style={{ width: '80%', marginBottom: 20 }}
          placeholder="Phone Number (Optional)"
          keyboardType="phone-pad"
          onChangeText={setPhoneNo}
          value={phoneNo}
        />

        <ThemedTextInput
          style={{ width: '80%', marginBottom: 20 }}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />

        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: '#f2f2f2' }}>Sign Up</Text>
        </ThemedButton>

        <Spacer />
        {error && <Text style={styles.error}>{error}</Text>}

        <Spacer height={50} />
        <Link href="/login">
          <ThemedText style={{ textAlign: 'center' }}>Already have an account? Log in</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Signup

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