import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Login from './components/Login/Login'
import Home from './pages/Home/Home'
import SearchList from './pages/SearchList/SearchList'
import RoomInfo from './pages/RoomInfo/RoomInfo'
import Reservation from './pages/Reservation/Reservation'
import Search from './components/Search/Search'
import Menu from './pages/menu/Menu'
import BoxColor from './BoxColor'
import Provider from './provider/Provider'
// import page from './pages/page'

function App() {
    return (
        <Provider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/searchList" element={<SearchList />} />
                    <Route path="/roomInfo" element={<RoomInfo />} />
                    <Route path="/reservation" element={<Reservation />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/boxColor" element={<BoxColor />} />
                </Route>
            </Routes>
        </Provider>
    )
}

export default App;
