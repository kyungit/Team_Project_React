import React, { useContext, useState } from 'react'
import HomeProvider from '../../provider/Home_Provider'
import Home1 from '../../components/Home/Home1'
import Home2 from '../../components/Home/Home2'
import Home3 from '../../components/Home/Home3'
import Home4 from '../../components/Home/Home4'
import Search from '../../components/Search/Search'

export default function Home() {
    return (
        <HomeProvider>
            <Search />
            <Home1 />
            <Home2 />
            <Home3 />
            <Home4 />
        </HomeProvider>
    )
}
