export default function Row({ className, data = "", children }) {
    const items = children
        ? children.split('/').map((item, index) => <div key={index}>{item.trim()}</div>)
        : data.includes(",")
            ? data.split(',').map((item, index) => <div key={index}>{item.trim()}</div>)
            : <div>{data}</div>;
    return <div className={`flex justify-between mt-4 ${className}`}>{items}</div>
}