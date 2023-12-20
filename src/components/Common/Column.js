export default function Column({ className, children }) {
    return <div className={`flex flex-col ${className}`}>{children}</div>
}
