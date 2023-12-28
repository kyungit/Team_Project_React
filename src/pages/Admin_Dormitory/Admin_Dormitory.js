import React, { useState } from 'react'
import DormitoryUpdate from '../../components/Admin_Dormitory/DormitoryUpdate'
import ReserveCheck from '../../components/Admin_Dormitory/ReserveCheck'
import ReserveUpdate from '../../components/Admin_Dormitory/ReserveUpdate'
import AdminDormitoryProvider from '../../provider/Admin_Dormitory_Provider'
import { Route, Routes } from 'react-router-dom'
import Layout2 from '../../Layout2'


export default function Admin_Dormitory() {
    return (
        <AdminDormitoryProvider className="grid grid-cols-12 h-auto">
            <Routes>
                <Route path="/" element={<Layout2 />}>
                    <Route path="/DormitoryUpdate" element={<DormitoryUpdate />} />
                    <Route path="/ReserveCheck" element={<ReserveCheck />} />
                    <Route path="/ReserveUpdate" element={<ReserveUpdate />} />
                </Route>
            </Routes>
        </AdminDormitoryProvider>
    )
}