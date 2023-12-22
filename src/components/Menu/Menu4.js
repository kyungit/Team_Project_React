import React, { useContext } from 'react'
import Box from '../Common/Box'
import MenuContext from '../../context/Menu_Context'
import Row from '../Common/Row'

export default function Menu4() {
    const { images } = useContext(MenuContext)
    console.log('zzz', images.images3)
    let imageInfo = null
    if (images && images.images3) {
        imageInfo = images.images3
        console.log('images의 넣은 배열' + imageInfo)
    }
    console.log('images를 넣은 배열' + imageInfo)

    return (
        <div className="col-start-4 col-end-13 w-full h-auto pt-16">
            {imageInfo &&
                imageInfo.map((visited, index) => (
                    <Box key={index}>
                        <Row className="text-2xl m-0 text-black">{index + 1}</Row>
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
                    </Box>
                ))}
        </div>
    )
}
