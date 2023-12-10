import React, { useState } from 'react'
import SearchList1 from '../../components/SearchList/SearchList1'
import SearchList2 from '../../components/SearchList/SearchList2'
import SearchList3 from '../../components/SearchList/SearchList3'
import SearchList4 from '../../components/SearchList/SearchList4'
import Div from '../../components/Common/Div'
import axios from 'axios'

export default function SearchList() {
    const [data, setData] = useState(null)
    const getSearchListApi = () => {
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
        <Div className="grid grid-cols-12 h-auto">
            <SearchList1 />
            <SearchList2 />
            <SearchList3 />
            <SearchList4 />
        </Div>
    )
}
