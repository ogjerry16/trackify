import { createContext, useState, useEffect, useContext } from 'react'
import { supabase } from '../lib/supabase'

export const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [session, setSession] = useState(null)
    const [authChecked, setAuthChecked] = useState(false)

    async function login(email, password) {
        setAuthChecked(false)
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })
            if (error) throw error;
            // REMOVED: setUser(data.user) - handled by auth listener
        } catch (error) {
            console.error('Login error: ', error.message);
            throw error;
        } finally {
            setAuthChecked(true)
        }
    }

    async function signup(email, password, name, phoneNo) {
        setAuthChecked(false)
        try {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        ...(name && { first_name: name }),   
                        ...(phoneNo && { phone_number: phoneNo }),
                    }
                }
            })
            if (error) throw error;
            // REMOVED: setUser(data.user) - handled by auth listener
            // if (data?.user) {
            //     const user = data.user
                
            //     await supabase.from("employees").insert({
            //         id: user.id,
            //         phone: user.user_metadata.phone_number
            // })}
        } catch (error) {
            console.error('Signup error: ', error.message);
            throw error;
        } finally {
            setAuthChecked(true)
        }
    }
    
    async function logout() {
        try {
            const { error } = await supabase.auth.signOut()
            if (error) throw error;
            // User will be automatically set to null by auth listener
        } catch (error) {
            console.error("Error trying to signout: ", error.message);
            throw error
        }
    }

    useEffect(() => {
        const getInitialSession = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                setSession(session);
                setUser(session?.user ?? null);
            } catch (error) {
                console.error('Error getting session:', error);
                setUser(null);
            } finally {
                setAuthChecked(true);
            }
        };

        getInitialSession();

        // Subscribe to auth state changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session);
                setUser(session?.user ?? null);
                setAuthChecked(true);
            }   
        );

        // Cleanup
        return () => subscription.unsubscribe();
    }, [])

    // Added missing return statement
    return (
        <UserContext.Provider value={{ 
            user, 
            session, 
            login, 
            signup, 
            logout, 
            authChecked 
        }}>
            {children}
        </UserContext.Provider>
    )
}