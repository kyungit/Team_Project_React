import React, {useContext} from "react";
import MenuContext from "../../context/Menu_Context";
import Box from "@mui/material/Box";
import Column from "../Common/Column";
import Row from "../Common/Row";

export default function Menu6() {
    const { images } = useContext(MenuContext)
    let imageInfo = null
    if (images && images.images5) {
        imageInfo = images.images5
        console.log('sadsad',imageInfo)
    }

    const Checkin = async (reservation) => {
        console.log("보냈습니다",reservation)
        try{
            const response = await fetch('http://localhost:8080/menu/checkin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reservation)
            });
        }catch (error){
            console.log('error'+error)
        }

        // 후속 처리
        window.location.reload();
    }
    const Checkout = async (reservation) => {
        try{
            const response = await fetch('http://localhost:8080/menu/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reservation)
            });
        }catch (error){
            console.log('error'+error)
        }

        // 후속 처리
        window.location.reload();
    }

    return(
        <div className="col-start-4 col-end-13 w-full h-auto pt-16">
        {imageInfo && imageInfo.map((reservation , index) => (
            <Box key={index}>
                <Row className="text-2xl m-0 text-black">{index + 1}</Row>
                <Row className="mt-1">{reservation.d_code}</Row>
                <Row className="mt-1">{reservation.r_code}</Row>
                <Row className="mt-1">{reservation.d_name}</Row>
                <Row className="mt-1">{reservation.d_type}</Row>
                <Row className="w-3/5 h-80">
                    <img src={reservation.r_img} alt=""/>
                </Row>
                    <Row className="mt-1">{reservation.r_name}</Row>
                    <Row className="mt-1">{reservation.m_userid}</Row>
                    <Row className="mt-1">{reservation.m_telno}</Row>
                    <Row className="mt-1">{reservation.reservation_checkin}</Row>
                    <Row className="mt-1">{reservation.reservation_checkout}</Row>
                    <Row className="mt-1">{reservation.reservation_guest}</Row>
                    <Row className="mt-1">{reservation.reservation_price}</Row>
                    <Row className="mt-1">{reservation.reservation_description}</Row>
                <Row className="mt-1">
                    {(() => {
                        switch (reservation.s_status) {
                            case 1:
                                return '결제완료';
                            case 3:
                                return '체크인 완료';
                            case 4:
                                return '체크아웃 완료';
                            default:
                                return '알 수 없는 상태';
                        }
                    })()}
                </Row>
                <Row>
                    <button
                        className="tab-size-4 user-select-text box-border flex items-center justify-center h-14 w-full rounded-md text-black font-bold text-lg mt-5"
                        style={{backgroundColor: '#D9F99D'}}
                        onClick={()=>Checkin(reservation)}>
                        체크인
                    </button>
                    <button
                        className="tab-size-4 user-select-text box-border flex items-center justify-center h-14 w-full rounded-md text-black font-bold text-lg mt-5"
                        style={{backgroundColor: '#D9F99D'}}
                        onClick={()=>Checkout(reservation)}>
                        체크아웃
                    </button>
                </Row>
            </Box>

            ))}
        </div>
    )

}