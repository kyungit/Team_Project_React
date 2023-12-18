import React, { useCallback, useContext, useEffect, useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'
import 'tailwindcss/tailwind.css'
import './your-tailwind.css'
import styled from 'styled-components'
import HomeContext from '../../context/Home_Context'
import SearchListContext from '../../context/SearchList_Context'

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
    // const { images, searchdata, setSearchdata } = useContext(HomeContext)
    const { images, searchdata, setSearchdata } = useContext(SearchListContext)
    const { keyword, startDate, endDate, guest } = searchdata

    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date(),
    })

    const handleValueChange = (newValue) => {
        // console.log('newValue:', newValue)
        setValue(newValue)
    }

    useEffect(() => {
        // console.log('value : ', value)
        onSearchChange(value)
    }, [value])

    const onSearchChange = useCallback(
        (value) => {
            setSearchdata((searchdata) => ({
                ...searchdata,
                startDate: value.startDate,
                endDate: value.endDate,
            }))
        },
        [value],
    )

    useEffect(() => {
        console.log('onSearchChange3 : ', searchdata)
    }, [searchdata])
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
