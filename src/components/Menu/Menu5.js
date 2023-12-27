import React, { useContext } from 'react'
import Box from '../Common/Box'
import MenuContext from '../../context/Menu_Context'
import Row from '../Common/Row'
import Input from '../Common/Input'
import Column from '../Common/Column'

export default function Menu5() {
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
                        <Row>
                            <Column className="w-full">
                                <Row className="text-base">숙박시설 코드</Row>
                                <input type="text" value={code} onChange={e => setCode(e.target.value)} />
                            </Column>
                            <input type="submit" value="제출" />
                        </Row>
                    </Box>
                ))}
        </div>
    )
}
