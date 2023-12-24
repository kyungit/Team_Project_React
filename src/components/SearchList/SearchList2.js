import React, { useEffect, useRef, useState, useCallback, useContext } from 'react'
import SearchListContext from '../../context/SearchList_Context'
import Column from '../Common/Column'
import Row from '../Common/Row'
import { useNavigate } from 'react-router-dom'

export default function SearchList2() {
    const { images, setImages, GetSearchList } = useContext(SearchListContext)
    // const { images, setImages, GetSearchList } = useContext(Context)
    const searchlists = images.searchlist1
    console.log('images4 : ', searchlists)

    const [pageNum, setPageNum] = useState(1)
    const [loading, setLoading] = useState(false) // 로딩 상태 추가
    const [initialLoad, setInitialLoad] = useState(true)
    const loadingRef = useRef(false)

    // const loadItems = useCallback(
    //     async (nextPageNum) => {
    //         setLoading(true) // 로딩 시작
    //         const newItems = await GetSearchList(nextPageNum)
    //         setImages((prevItems) => ({
    //             searchlist1: [...prevItems.searchlist1, ...newItems],
    //         }))
    //         // setTimeout(() => {
    //         //     setLoading(false)
    //         // }, 3000)
    //         setLoading(false) // 로딩 상태 업데이트
    //     },
    //     [GetSearchList, setImages],
    // )
    const loadItems = useCallback(
        async () => {
            if (loadingRef.current) return; // 이미 로딩 중이라면 더 이상 진행하지 않는다.
            loadingRef.current = true
            const newItems = await GetSearchList(pageNum)
            setImages((prevItems) => ({
                searchlist1: [...prevItems.searchlist1, ...newItems],
            }))
            console.log('pageNum : ', pageNum)
            loadingRef.current = false
        },
        [GetSearchList, setImages, pageNum],)



    const navigate = useNavigate()

    const onRoomInfo = (d_code,r_code) => {
        sessionStorage.setItem('d_code', d_code)
        sessionStorage.setItem('r_code', r_code)
        navigate('/roomInfo')
    }

    useEffect(() => {
        loadItems(pageNum) // 컴포넌트가 마운트될 때 한 번만 데이터 로드
    }, []) // dependency 배열에서 loadItems를 제거

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement
            console.log(scrollHeight, scrollTop, clientHeight)
            if (scrollHeight - scrollTop <= clientHeight + 50) {
                // 로딩 중이 아닐 때만 새로운 데이터 불러오기
                // if (!loading) {
                //     setPageNum((prevPageNum) => prevPageNum + 1);
                // }
                // if (!loadingRef.current) {
                //     setPageNum((prevPageNum) => prevPageNum + 1);
                // }
                if (!loadingRef.current) {
                    setPageNum((prevpage) => prevpage + 1);
                    // loadItems(pageNum); // loadItems 함수 내에서 페이지 번호를 업데이트
                    // setPageNum((prevPageNum) => prevPageNum + 1);
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []) // 스크롤 이벤트 리스너 등록 및 해제

    useEffect(() => {
        if (pageNum > 1) {
            loadItems();
        }
    }, [pageNum]) // pageNum이 업데이트 될 때마다 loadItems 함수 호출

    return (
        <div className="col-start-5 col-end-12 w-full pt-16 flex flex-row justify-center">
            <div className="flex flex-col w-5/6">
                <div>qweasdzxc</div>
                {searchlists &&
                    searchlists.map((searchlist, index) => (
                        <div
                            key={pageNum + index}
                            onClick={() => {
                                onRoomInfo(searchlist.d_code,searchlist.r_code)
                            }}
                        >
                            <Row className="w-full">
                                <Row className="w-1/3 h-40 bg-red-300"></Row>
                                <Column className="ml-4 w-full">
                                    <Row className="text-xl font-semibold">{searchlist.d_name}</Row>
                                    <Row className="mt-1">★{searchlist.d_star}////////////////////////////////////////////////////////////////////</Row>
                                    <Row className="mt-1">{searchlist.d_road}/</Row>
                                    <Row className="mt-1 text-2xl font-semibold">//////////////////////////////{parseInt(searchlist.min_r_price).toLocaleString()}원~{parseInt(searchlist.max_r_price).toLocaleString()}원</Row>
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
