import React,{ useContext } from 'react'
import Box from '../Common/Box'
import Row from '../Common/Row'
import Column from '../Common/Column'
import MenuContext from '../../context/Menu_Context'

export default function Menu2() {
    const { images } = useContext(MenuContext)
    console.log("---------",images)
    let memberInfo=null;
    if(images&&images.images1){
        memberInfo = images.images1;
        console.log("=========",memberInfo)
    }
    const formatRegDate = (regdate) => {
        const date = new Date(regdate);
        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
        return formattedDate;
    };
    return (
        <div className="col-start-4 col-end-13 w-full h-auto pt-16">
            {memberInfo&&(
                <Box>회원 정보
                    <Row>{memberInfo.userid}</Row>
                    <Row>{memberInfo.username}</Row>
                    <Row>{formatRegDate(memberInfo.regdate)}</Row>

                </Box>
            )}
        </div>
    )

}