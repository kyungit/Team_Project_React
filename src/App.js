import { Routes, Route, Router, Redirect, Switch } from 'react-router-dom'
import Main from './a_Main'
import Layout from './a_Layout'
import SignIn from './a_Signin'
import Home from './Home'
import Search from './Search'
import Reservation from './Reservation'
function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/login" element={<SignIn />}></Route>
                <Route path="/home" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/reservation" element={<Reservation />} />
            </Route>
        </Routes>
    )
}

export default App
