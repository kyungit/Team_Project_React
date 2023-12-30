import React, { useState } from 'react'

export default function Admin_Dormitory() {
    return null;
}




SELECT 
SUM(
	SUM(CASE WHEN d_star = 5 THEN 1 ELSE 0 END) +
	SUM(CASE WHEN d_star = 5.1 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 5.2 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 5.3 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 5.4 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 5.5 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 5.6 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 5.7 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 5.8 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 5.9 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 6 THEN 1 ELSE 0 END) +
	SUM(CASE WHEN d_star = 6.1 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 6.2 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 6.3 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 6.4 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 6.5 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 6.6 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 6.7 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 6.8 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 6.9 THEN 1 ELSE 0 END)  +
		SUM(CASE WHEN d_star = 7 THEN 1 ELSE 0 END) +
	SUM(CASE WHEN d_star = 7.1 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 7.2 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 7.3 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 7.4 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 7.5 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 7.6 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 7.7 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 7.8 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 7.9 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 8 THEN 1 ELSE 0 END) +
	SUM(CASE WHEN d_star = 8.1 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 8.2 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 8.3 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 8.4 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 8.5 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 8.6 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 8.7 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 8.8 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 8.9 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 9 THEN 1 ELSE 0 END) +
	SUM(CASE WHEN d_star = 9.1 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 9.2 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 9.3 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 9.4 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 9.5 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 9.6 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 9.7 THEN 1 ELSE 0 END)  +
	SUM(CASE WHEN d_star = 9.8 THEN 1 ELSE 0 END)  +
    SUM(CASE WHEN d_star = 9.9 THEN 1 ELSE 0 END) 
    ) AS 'Total'
FROM tbl_dormitory;
