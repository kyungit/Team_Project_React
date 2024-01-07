import React, { useState, useEffect, useMemo, useCallback, useContext } from 'react'
import axios from 'axios'
import SearchListContext from '../context/SearchList_Context'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context'

const SearchListProvider = ({ children }) => {

    return <SearchListContext.Provider>{children}</SearchListContext.Provider>
}

export default SearchListProvider
