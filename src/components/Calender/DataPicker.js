import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'
import 'tailwindcss/tailwind.css'
import './your-tailwind.css'
import styled from 'styled-components'

const Styled = styled.div`
    div > input {
        padding: 2rem;
        font-size: inherit;
        background: transparent;
        display: inline-block;
        height: auto;
        width: 19.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        border: none;
        padding: 0;
        color: #2d3748;
        caret-color: #48bb78;
        ::placeholder {
            /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #cbd5e0;
        }
        :focus::placeholder {
            color: #f7fafc;
        }
        outline: none;
        position: relative;
        left: 2rem;
        top: 0.25rem;
        z-index: 20;
        cursor: pointer;
        line-height: normal;
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
