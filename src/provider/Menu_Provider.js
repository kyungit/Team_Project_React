import React, {useState, useEffect, useMemo} from 'react'
import axios from 'axios'
import MenuContext from '../context/Menu_Context'
import getCookie from '../api/cookie/getCookie'

const MenuProvider = ({ children }) => {
    const [images, setImages] = useState({
        images1: null,
        images2: null,
        images3: null,
        images4: null,
        images5: null
    })
    const [imagesdata, setImagesdata] = useState({
        d_code: null,
        r_code: null,
        m_userid: null,
        review_score: null,
        review_comment: null,
        reservation_code:null,
        fileInfo:null
    })

    const [reviewFile, setReviewFile] = useState({
        src:null,
        fileseqno:null,
    })
    const [deleteFile,setDeleteFile] = useState({
        fileseqno:null,
    })


    useEffect(() => {
        const ImagesAPI = async () => {
            try{
            const result1 = await axios.get(`http://localhost:8080/menu/memberInfo?userid=${getCookie('userid')}`)
            const result2 = await axios.get(`http://localhost:8080/menu/reservationInfo?userid=${getCookie('userid')}`)
            const result3 = await axios.get(`http://localhost:8080/menu/visited?userid=${getCookie('userid')}`)
            const result4 = await axios.get(`http://localhost:8080/menu/memberReview?userid=${getCookie('userid')}`)
            const result5 = await axios.get(`http://localhost:8080/menu/managerReservation?userid=${getCookie('userid')}`)


                // const result4 = await axios.get('')

            setImages({
                images1: result1.data,
                images2: result2.data,
                images3: result3.data,
                images4: result4.data,
                images5: result5.data
            });
            console.log('result1 : ', result1)
            console.log('result2 : ', result2)
            console.log('result3 : ', result3)
            console.log('result4 : ', result4)
        }catch(error){
            console.error('Error data', error)
            }
        };

        ImagesAPI()
    }, [])

    const value = useMemo(() => ({ images ,setImages,imagesdata,setImagesdata,reviewFile, setReviewFile,deleteFile,setDeleteFile}), [images,setImages,imagesdata,setImagesdata,reviewFile, setReviewFile,deleteFile,setDeleteFile])

    return <MenuContext.Provider value={value}><div>{children}</div></MenuContext.Provider>
}

export default MenuProvider
