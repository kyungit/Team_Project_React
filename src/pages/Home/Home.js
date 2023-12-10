import React, { useState } from 'react'
import Home1 from '../../components/Home/Home1'
import Home2 from '../../components/Home/Home2'
import Home3 from '../../components/Home/Home3'
import Home4 from '../../components/Home/Home4'
import Div from '../../components/Common/Div'
import Search from '../../components/Search/Search'
import axios from 'axios'

export default function Home() {
    const [data, setData] = useState(null)
    const getHomeApi = () => {
        axios.get('').then((res) => {
            setData(res.data)
            console.log(res.data)
        })
    }
    // const [title, setTitle] = useState('')
    // const getTitle = () => {
    //     for (let i = 0; i < data.length; i++) {
    //         setTitle(data[i].title)
    //     }
    // }

    return (
        <Div>
            <Search />
            <Home1 />
            <Home2 />
            <Home3 />
            <Home4 />
        </Div>
    )
}
