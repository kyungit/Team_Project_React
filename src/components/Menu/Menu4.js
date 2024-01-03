import React, {useContext, useEffect, useState} from 'react'
import Box from '../Common/Box'
import MenuContext from "../../context/Menu_Context";
import Row from "../Common/Row";
import ReviewModal from "./ReviewModal";
import Context from "../../context/Context";

export default function Menu4() {

    const  { images , setImagesdata , imagesdata }   = useContext(MenuContext)
    const [image,setImage] = useState(null);




    console.log("zzz", images.images3)
    let imageInfo = null;
    if (images && images.images3){
        imageInfo = images.images3
        console.log("images의 넣은 배열"+imageInfo);
    }
    console.log("images를 넣은 배열"+imageInfo);
    useEffect(() => {
        if (images && images) {
            setImage(images.images3)
        }
    }, [images])
    // 모달을 열고 닫는 상태를 관리하는 state입니다.
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 모달을 열고 닫는 함수입니다.
    const openModal = (visited) => {
        setImagesdata({
            ...imagesdata,
            d_code:visited.d_code,
            r_code:visited.r_code,
            m_userid:visited.m_userid,
            reservation_code:visited.reservation_code
        })
        // if(imagesdata.review_score == null){
        //     alert('별점을 입력하세요');
        //     return false;
        // }
        // if(imagesdata.review_comment == null){
        //     alert('내용을 입력하세요.');
        //     return false;
        // }else{
        //         alert("서버 에러.");
        //         return false;
        //     }


      /*  setImagesdata&&setImagesdata((reviews)  => ({
            ...reviews,
            d_code: imageInfo.d_code,
            r_code: imageInfo.r_code,
            m_userid: imageInfo.m_userid,
            review_score: imageInfo.review_score,
            review_comment: imageInfo.review_comment,
        }))*/
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="col-start-4 col-end-13 w-full h-auto pt-16">
            { imageInfo && imageInfo.map((visited,index)=> (

                <Box key={index}>

                    <Row className="text-2xl m-0 text-black">{index + 1}</Row>
                    <Row>{visited.reservation_code}</Row>
                    <Row className="mt-1">{visited.d_code}</Row>
                    <Row className="mt-1">{visited.r_code}</Row>
                    <Row className="mt-1">{visited.d_name}</Row>
                    <Row className="mt-1">{visited.d_type}</Row>
                    <Row className="mt-1">{visited.r_img}</Row>
                    <Row className="mt-1">{visited.r_name}</Row>
                    <Row className="mt-1">{visited.m_userid}</Row>
                    <Row className="mt-1">{visited.m_telno}</Row>
                    <Row className="mt-1">{visited.reservation_checkin}</Row>
                    <Row className="mt-1">{visited.reservation_checkout}</Row>
                    <Row className="mt-1">{visited.reservation_guest}</Row>
                    <Row className="mt-1">{visited.reservation_price}</Row>
                    <Row className="mt-1">{visited.reservation_description}</Row>
                    <Row className="mt-1">{visited.s_status}</Row>

                    {/* 리뷰 작성 버튼입니다. 이 버튼을 누르면 모달창이 열립니다. */}
                    <button
                        className="tab-size-4 user-select-text box-border flex items-center justify-center h-14 w-full rounded-md text-black font-bold text-lg mt-5"
                        style={{backgroundColor: '#D9F99D'}}
                        onClick={()=>{
                            openModal(visited)
                        }}
                    >
                        작성하기
                    </button>


                    {/* 리뷰 작성 모달창입니다. */}
                    {isModalOpen && (
                        <ReviewModal closeModal={closeModal}>

                        </ReviewModal>
                    )}
                    {/*<ReviewModal isOpen={isModalOpen} onClose={openModal} />*/}
                </Box>

            ))}

        </div>

    )
}
