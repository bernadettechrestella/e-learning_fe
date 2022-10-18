import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import App from './App'
import ListVideoAdmin from './components/listVideoAdmin';
import Login from './components/login';

const Middleware = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/loginAdmin" element={<Login />}/>
                <Route path="/listVideoAdmin" element={<ListVideoAdmin />}/>
            </Routes>
        </Router>
    )
}

export default Middleware;