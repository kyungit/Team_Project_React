import React, { useState } from 'react'
import SearchList1 from '../../components/SearchList/SearchList1'
import SearchList2 from '../../components/SearchList/SearchList2'
import SearchList3 from '../../components/SearchList/SearchList3'
import SearchList4 from '../../components/SearchList/SearchList4'
import SearchListProvider from '../../provider/SearchList_Provider'

export default function SearchList() {
    return (
        <SearchListProvider className="grid grid-cols-12 h-auto">
            <SearchList1 />
            <SearchList2 />
            <SearchList3 />
            <SearchList4 />
        </SearchListProvider>
    )
}
