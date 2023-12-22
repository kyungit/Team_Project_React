import React, {useState, useEffect, useMemo} from 'react'
import axios from 'axios'
import MenuContext from '../context/Menu_Context'

const MenuProvider = ({ children }) => {
    const [images, setImages] = useState({
        images1: null,
        images2: null,
        images3: null,
        // images4: null,
    })


    /*const [reservationdata, setReservationdata] = useState({
        d_code: '1',
        r_code: '2',
        d_name: '3',
        d_type: '4',
        r_img: 'a',
        r_name: 'a',

        m_userid: 'ehrud',
        m_telno: 'a',
        reservation_code: '',
        reservation_checkin: 'a',
        reservation_checkout: 'a',
        reservation_guest: 1,
        reservation_price: 2,
        reservation_description: 'a',
        s_status: 3,
    })*/



    useEffect(() => {
        const ImagesAPI = async () => {
            try{
            const result1 = await axios.get('http://localhost:8080/menu/memberInfo')
            const result2 = await axios.get(`http://localhost:8080/menu/reservationInfo`)
            const result3 = await axios.get('http://localhost:8080/menu/visited')
            // const result4 = await axios.get('')

            setImages({
                images1: result1.data,
                images2: result2.data,
                images3: result3.data,
                // images4: result4.data,
            });
            console.log('result1 : ', result1)
            console.log('result2 : ', result2)
            console.log('result3 : ', result3)
            // console.log('result4 : ', result4)
        }catch(error){
            console.error('Error data', error)
            }
        };

        ImagesAPI()
    }, [])

    const value = useMemo(() => ({ images }), [images])

    return <MenuContext.Provider value={value}><div>{children}</div></MenuContext.Provider>
}

export default MenuProvider
