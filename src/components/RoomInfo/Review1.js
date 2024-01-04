import React, {useContext} from 'react'
import RoomInfoContext from "../../context/RoomInfo_Context";
import Column from "../Common/Column";
import Row from "../Common/Row";


export default function Review1() {
    const { roomInfos } = useContext(RoomInfoContext)
    let reviewInfo = null
    if (roomInfos && roomInfos.roomInfos2) {
        reviewInfo = roomInfos.roomInfos2
        console.log("배열인지 확인",reviewInfo)
    }
    return (
        <div className="col-start-3 col-end-11 w-full h-1000">
            {reviewInfo && reviewInfo.map((review, index) => (
                <div key={index}>
                <Column>
                    <Row>리뷰 띄우기</Row>
                    <Row className="mt-1">{review.r_code}</Row>
                    <Row className="mt-1">{review.m_userid}</Row>
                    <Row className="mt-1">{review.review_comment}</Row>
                    <Row className="mt-1">{review.review_score}</Row>
                </Column>
                </div>
            ))}
        </div>

    )
}