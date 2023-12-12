import { Routes, Route, Router, Redirect, Switch } from 'react-router-dom'
import Layout from './Layout'
import SignIn from './components/Login/Signin'
import Home from './pages/Home/Home'
import SearchList from './pages/SearchList/SearchList'
import RoomInfo from './pages/RoomInfo/RoomInfo'
import Search from './components/Search/Search'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignIn />}></Route>
                <Route path="/searchList" element={<SearchList />} />
                <Route path="/roomInfo" element={<RoomInfo />} />
                <Route path="/search" element={<Search />} />
            </Route>
        </Routes>
    )
}

export default App
