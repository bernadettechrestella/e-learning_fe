import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import App from './App'

const Middleware = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App />}/>
            </Routes>
        </Router>
    )
}

export default Middleware;