import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Alert, 
  AppState, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView
} from 'react-native';
import { Link } from 'expo-router';
import { supabase } from '../../lib/supabase'
import { Colors } from '../../constants/Color'

// Themed components
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Set up auto refresh when app comes to foreground
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        supabase.auth.startAutoRefresh();
      } else {
        supabase.auth.stopAutoRefresh();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const handleSignIn = async () => {
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password: password,
      });

      if (error) {
        setError(error.message);
        return;
      }
      
      console.log("Login successful");
      // Navigation will typically be handled by auth state change listener
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Spacer height={40} />
          <ThemedText title={true} style={styles.title}>
            Login to your account
          </ThemedText>

          <Spacer height={30} />
          
          <ThemedTextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setEmail}
            value={email}
            editable={!loading}
          />

          <ThemedTextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={setPassword}
            value={password}
            editable={!loading}
            onSubmitEditing={handleSignIn}
          />

          {error && (
            <>
              <Spacer height={10} />
              <ThemedText style={styles.error}>{error}</ThemedText>
            </>
          )}

          <Spacer height={20} />
          
          <ThemedButton 
            onPress={handleSignIn}
            disabled={loading}
            style={styles.button}
          >
            <ThemedText style={styles.buttonText}>
              {loading ? 'Signing in...' : 'Sign in'}
            </ThemedText>
          </ThemedButton>

          <Spacer height={20} />
          
          <Link href="/forgot-password" style={styles.link}>
            <ThemedText style={styles.linkText}>Forgot password?</ThemedText>
          </Link>

          <Spacer height={30} />
          
          <Link href="/signup">
            <ThemedText style={styles.linkText}>
              Don't have an account? Sign up
            </ThemedText>
          </Link>
        </ScrollView>
      </KeyboardAvoidingView>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    maxWidth: 400,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    maxWidth: 400,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  error: {
    color: Colors.warning,
    textAlign: 'center',
    backgroundColor: '#fef0f0',
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.warning,
    width: '100%',
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    textAlign: 'center',
    color: Colors.primary,
  },
});