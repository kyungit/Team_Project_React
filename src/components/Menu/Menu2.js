import React, { useContext } from 'react'
import Box from '../Common/Box'
import Row from '../Common/Row'
import Column from '../Common/Column'
import MenuContext from '../../context/Menu_Context'
import Input from '../Common/Input'

export default function Menu2() {
    const { images } = useContext(MenuContext)
    console.log('---------', images)
    let memberInfo = null
    if (images && images.images1) {
        memberInfo = images.images1
        console.log('=========', memberInfo)
    }
    const formatRegDate = (regdate) => {
        const date = new Date(regdate)
        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
        return formattedDate
    }
    return (
        <div className="col-start-4 col-end-13 w-full h-auto pt-16 px-16">
            <Row className='text-4xl font-semibold'>내 정보 관리</Row>
            {memberInfo && (
                <Box className='mt-12'>
                    <Row className='text-2xl font-medium'>회원 정보</Row>
                    <Row>
                        <Column className='w-full'>
                            <Row className='text-base'>유저아이디</Row>
                            <Input disabled={true} value={memberInfo.userid}></Input>
                        </Column>
                        <Column className='w-full'>
                            <Row className='text-base'>유저 정보</Row>
                            <Input disabled={true} value={memberInfo.username}></Input>
                        </Column>
                    </Row>
                    <Row>
                        <Column className='w-full'>
                            <Row className='text-base'>회원 가입 날짜</Row>
                            <Input disabled={true} value={formatRegDate(memberInfo.regdate)}></Input>
                        </Column>
                        <Column className='w-full'>
                            <Row className='text-base'>휴대폰 번호</Row>
                            <Input disabled={true}>{memberInfo.userid}</Input>
                        </Column>
                    </Row>
                </Box>
            )}
        </div>
    )
}
