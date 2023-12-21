import React, { useState } from 'react'
import HomeProvider from '../../provider/Home_Provider'
import Home1 from '../../components/Home/Home1'
import Home2 from '../../components/Home/Home2'
import Home3 from '../../components/Home/Home3'
import Home4 from '../../components/Home/Home4'
import Search from '../../components/Search/Search'
import axios from 'axios'
import Grid from '../../components/Common/Grid'
import Search2 from '../../components/Search/Search2'

export default function Home() {
    return (
        <>
            <HomeProvider>
                <Grid>
                    <Search />
                    {/* <Search2 /> */}
                    <Home1 />
                    <Home2 />
                    <Home3 />
                    <Home4 />
                </Grid>
            </HomeProvider>
        </>
    )
}
