import React, { useEffect, useRef, useState, useCallback, useContext } from 'react'
import SearchListContext from '../../context/SearchList_Context'
import Column from '../Common/Column'
import Row from '../Common/Row'

export default function SearchList2() {
    const { images, setImages, GetSearchList } = useContext(SearchListContext)
    const searchlists = images.searchlist1
    console.log('images4 : ', searchlists)

    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false) // 로딩 상태 추가
    const [initialLoad, setInitialLoad] = useState(true)

    const loadItems = useCallback(
        async (nextPage) => {
            setLoading(true) // 로딩 시작
            const newItems = await GetSearchList(nextPage)
            setImages((prevItems) => ({
                searchlist1: [...prevItems.searchlist1, ...newItems],
            }))
            // setTimeout(() => {
            //     setLoading(false)
            // }, 3000)
            setLoading(false) // 로딩 상태 업데이트
        },
        [GetSearchList, setImages],
    )

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
        loadItems(page) // 컴포넌트가 마운트될 때 한 번만 데이터 로드
    }, [loadItems, page]) // dependency 배열에서 loadItems를 제거

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement
            console.log(scrollHeight, scrollTop, clientHeight)
            if (scrollHeight - scrollTop <= clientHeight + 50 && !loading) {
                // setPage((prevPage) => prevPage + 1)
                // loadItems()
                loadItems(page + 1)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [loadItems, loading, page]) // 스크롤 이벤트 리스너 등록 및 해제

    return (
        <div className="col-start-5 col-end-11 w-full pt-16">
            <div className="flex flex-col w-full">
                <div>qweasdzxc</div>
                {searchlists &&
                    searchlists.map((e, index) => (
                        <div key={page + index}>
                            <Row className="w-full">
                                <Row className="w-1/3 h-40 bg-red-300"></Row>
                                <Column className="ml-4 w-full">
                                    <Row className="text-xl font-semibold">{e.d_name}</Row>
                                    <Row className="mt-1">2.5-stars/</Row>
                                    <Row className="mt-1">Susseong-gu, Daegu/</Row>
                                    <Row className="mt-1 text-2xl font-semibold">/121,000</Row>
                                    <Row className="mt-1">
                                        /
                                        <button
                                            className="tab-size-4 user-select-text box-border flex items-center justify-center 
                                                    h-10 w-1/4 rounded-md text-black font-bold text-lg"
                                            style={{ backgroundColor: '#D9F99D' }}
                                        >
                                            결제하기
                                        </button>
                                    </Row>
                                </Column>
                            </Row>
                            <hr className="mt-6" />
                        </div>
                    ))}
            </div>
        </div>
    )
}
