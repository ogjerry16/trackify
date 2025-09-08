import { Image, useColorScheme} from 'react-native'

import LightLogo from '../assets/favicon.png'
import DarkLogo from '../assets/favicon-32x32.png'

const ThemedLogo = ({ style,...props}) => {

    const colorScheme = useColorScheme()

    const Logo = colorScheme === "light" ? LightLogo : DarkLogo

    return (
        <Image source={Logo} {...props} />
    )

}

        
        
export default ThemedLogo
