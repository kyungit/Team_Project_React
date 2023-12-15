import axios from 'axios'
import React, { useEffect, useRef, useState, useCallback, useContext } from 'react'
import SearchListContext from '../../context/SearchList_Context'

export default function SearchList2() {
    const data = useContext(SearchListContext)
    const searchlists = data.searchlist1
    console.log('images4 : ', searchlists)

    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false) // 로딩 상태 추가
    const [initialLoad, setInitialLoad] = useState(true)

    const containerRef = useRef(null)

    const loadItems = useCallback(() => {
        if (loading) return // 로딩 중이면 함수를 종료합니다.

        setLoading(true) // 로딩 시작

        const newItems = searchlists
        // const newItems = await axios
        // .get(`http://localhost:8080/searchList/dormitory`)
        // // .get(`https://jsonplaceholder.typicode.com/posts?_start=${(page - 1) * 10}&_limit=10`)
        // .then((res) => {
        //     console.log(res.data)
        //     return res.data
        // })

        if (initialLoad) {
            setItems((prevItems) => [...prevItems, ...newItems])
            setPage((prevPage) => prevPage + 1)
            setLoading(false)
            setInitialLoad(false)
        } else {
            setTimeout(() => {
                setItems((prevItems) => [...prevItems, ...newItems])
                setPage((prevPage) => prevPage + 1)
                setLoading(false)
            }, 1000)
        }
    }, [loading, initialLoad])

    //     const newItems = await axios
    //         .get(`http://localhost:8080/searchList/dormitory`)
    //         // .get(`https://jsonplaceholder.typicode.com/posts?_start=${(page - 1) * 10}&_limit=10`)
    //         .then((res) => {
    //             console.log(res.data)
    //             return res.data
    //         })

    //     if (initialLoad) {
    //         setItems((prevItems) => [...prevItems, ...newItems])
    //         setPage((prevPage) => prevPage + 1)
    //         setLoading(false)
    //         setInitialLoad(false)
    //     } else {
    //         setTimeout(() => {
    //             setItems((prevItems) => [...prevItems, ...newItems])
    //             setPage((prevPage) => prevPage + 1)
    //             setLoading(false)
    //         }, 1000)
    //     }
    // }, [loading, initialLoad]) // page를 제거하고 initialLoad를 추가

    useEffect(() => {
        loadItems() // 컴포넌트가 마운트될 때 한 번만 데이터 로드
    }, []) // dependency 배열에서 loadItems를 제거

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement
            console.log(scrollHeight, scrollTop, clientHeight)
            if (scrollHeight - scrollTop <= clientHeight + 50) {
                loadItems()
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [loadItems]) // 스크롤 이벤트 리스너 등록 및 해제

    return (
        <div className="col-start-5 col-end-11 w-full pt-16" ref={containerRef}>
            <div className="flex flex-col w-full">
                <div>qweasdzxc</div>
                {searchlists &&
                    searchlists.map((e, index) => (
                        <div key={e.d_code}>
                            <div className="w-20 h-20 bg-red-300"></div>
                            <div>{e.d_name}</div>
                            <div>{e.d_telno}</div>
                            <div>{e.d_type}</div>
                            <div>2.5 STAR</div>
                            <div>Seoul</div>
                            <div className="text-end">1,000,000</div>
                            <div className="text-end">NOT INCLUDE TAXES</div>
                            <div className="flex flex-row justify-between">
                                <div>4/5 30 review</div>
                                <button className="w-10 h-10 bg-blue-300"> </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
