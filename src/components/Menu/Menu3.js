import React, {useContext, useState} from 'react'
import Box from '../Common/Box'
import Row from "../Common/Row";
import MenuContext from "../../context/Menu_Context";
import Column from "../Common/Column";


export default function Menu3() {
    const  { images }   = useContext(MenuContext)
    console.log("zzz", images.images2)
    let imageInfo = null;
    if (images && images.images2){
         imageInfo = images.images2
         console.log("images의 넣은 배열"+imageInfo);
     }
    console.log("images를 넣은 배열"+imageInfo);
    return (
        <div className="col-start-4 col-end-13 w-full h-auto pt-16">
            { imageInfo && imageInfo.map((reservation,index)=> (

                <Box key={index}>

                    <Row className="text-2xl m-0 text-black">{index+1}</Row>
                   <Row className="mt-1">{reservation.d_code}</Row>
                    <Row className="mt-1">{reservation.r_code}</Row>
                    <Row className="mt-1">{reservation.d_name}</Row>
                    <Row className="mt-1">{reservation.d_type}</Row>
                    <Row className="mt-1">{reservation.r_img}</Row>
                    <Row className="mt-1">{reservation.r_name}</Row>
                    <Row className="mt-1">{reservation.m_userid}</Row>
                    <Row className="mt-1">{reservation.m_telno}</Row>
                    <Row className="mt-1">{reservation.reservation_checkin}</Row>
                    <Row className="mt-1">{reservation.reservation_checkout}</Row>
                    <Row className="mt-1">{reservation.reservation_guest}</Row>
                    <Row className="mt-1">{reservation.reservation_price}</Row>
                    <Row className="mt-1">{reservation.reservation_description}</Row>
                    <Row className="mt-1">{reservation.s_status}</Row>

                </Box>
            ))}
        </div>

    )

}
