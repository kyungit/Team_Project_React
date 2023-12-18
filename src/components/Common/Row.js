// export default function Row({ className, data = '', children }) {
//     const items =
//         typeof children === 'string' ? (
//             children.split('/').map((item, index) => <div key={index}>{item.trim()}</div>)
//         ) : Array.isArray(children) ? (
//             children.map((child, index) => <div key={index}>{child}</div>)
//         ) : data.includes(',') ? (
//             data.split(',').map((item, index) => <div key={index}>{item.trim()}</div>)
//         ) : (
//             <div>{data}</div>
//         )
//     return <div className={`flex justify-between mt-4 ${className}`}>{items}</div>
// }

import React from 'react'

export default function Row({ className, children }) {
    const items = React.Children.map(children, (child, index) => {
        if (typeof child === 'string') {
            return child
                .split('/')
                .map((item, subIndex) => <div key={`${index}-${subIndex}`}>{item.trim()}</div>)
        }
        return child
    })

    return <div className={`flex justify-between mt-4 ${className}`}>{items}</div>
}
