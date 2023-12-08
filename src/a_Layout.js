import { Outlet } from 'react-router-dom'
import Nav from './a_nav'

const Layout = () => {
    return (
        <>
            <div>
                <Nav />
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout
