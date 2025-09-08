import { useRouter } from "expo-router"
import { useEffect } from "react"
import { useUser } from "../../hooks/useUser"
import ThemedLoader from "../ThemedLoader"


const UserOnly = ({ children }) => {
  const { user, authChecked } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (authChecked && user === null) { // Another example of short circuiting
                                        //A && U means:
                                            // If A is falsey, stop → return false.

                                            // If A is truthy, then evaluate U.
      router.replace("/login")
    }
  }, [user, authChecked])

  if (!authChecked || !user) {
    return (
        <ThemedLoader />
    )
  }
  return children
}

export default UserOnly