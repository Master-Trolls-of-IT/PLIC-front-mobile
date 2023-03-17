import { registerRootComponent } from 'expo'
import App from './infrastructure/ui/pages/App'

export default registerRootComponent(() => {
    return (
        <App />
    )
}
)