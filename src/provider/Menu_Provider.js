import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import MenuContext from '../context/Menu_Context'
import getCookie from '../api/cookie/getCookie'
import { fetchMenuApi } from '../services/MenuApi'

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
        reservation_code: null,
        fileInfo: null,
        r_name: null
    })

    const [reviewFile, setReviewFile] = useState({
        src: null,
        fileseqno: null,
    })
    const [deleteFile, setDeleteFile] = useState({
        fileseqno: null,
    })

    useEffect(() => {
        const fetchAndSetImages = async () => {
            const fetchMenuData = await fetchMenuApi()
            setImages(fetchMenuData)
        }

        fetchAndSetImages()
    }, [])
    
    const value = useMemo(() => ({ images, setImages, imagesdata, setImagesdata, reviewFile, setReviewFile, deleteFile, setDeleteFile }), [images, setImages, imagesdata, setImagesdata, reviewFile, setReviewFile, deleteFile, setDeleteFile])

    return <MenuContext.Provider value={value}><div>{children}</div></MenuContext.Provider>
}

export default MenuProvider
