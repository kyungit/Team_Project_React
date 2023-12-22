import React, {useState} from 'react'
import Box from '../Common/Box'
import Row from "../Common/Row";
import Menu2 from './Menu2';
import Menu3 from './Menu3';
import Menu4 from './Menu4';
export default function Menu1() {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (menuNumber) => {
        setActiveMenu(menuNumber);
    }

    return (
        <div className="col-start-1 col-end-4 w-full h-auto pt-16">
            <Box>
                <div onClick={() => handleMenuClick(2)} className="row-hover">
                    <Row>내 정보 관리</Row>
                </div>
                <div onClick={() => handleMenuClick(3)} className="row-hover">
                    <Row>예약 내역</Row>
                </div>
                <div onClick={() => handleMenuClick(4)} className="row-hover">
                    <Row>방문 내역</Row>
                </div>
            </Box>

            {activeMenu === 2 && <Menu2 />}
            {activeMenu === 3 && <Menu3 />}
            {activeMenu === 4 && <Menu4 />}
        </div>
    )
}
