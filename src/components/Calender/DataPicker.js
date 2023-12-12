import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'
import 'tailwindcss/tailwind.css'
import './your-tailwind.css'

import styled from 'styled-components'

const Styled = styled.div`
    div > input {
        color: red;
    }
`

export default function DataPicker() {
    // document.querySelector('div>input').style.color = 'red'
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11),
    })

    const handleValueChange = (newValue) => {
        console.log('newValue:', newValue)
        setValue(newValue)
    }
    return (
        <Styled>
            <Datepicker value={value} onChange={handleValueChange} />
            {/* <Datepicker
                className="hello"
                value={value}
                onChange={handleValueChange}
            /> */}
        </Styled>
    )
}
