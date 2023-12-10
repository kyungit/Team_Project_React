import React from 'react'

export default function SearchList1() {
    return (
        <div className="col-start-3 col-end-5 w-full h-auto pt-16">
            <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                    <div>Filters</div>
                    <div>Clear</div>
                </div>
                <div>PropertyType</div>
                <div className="flex flex-row">
                    <input type="checkbox" className="w-5 h-5 p-4" />
                    <label className="ml-4">All</label>
                </div>
                <div className="flex flex-row">
                    <input type="checkbox" className="w-5 h-5 p-4" />
                    <label className="ml-4">Hotel</label>
                </div>
                <div className="flex flex-row">
                    <input type="checkbox" className="w-5 h-5 p-4" />
                    <label className="ml-4">Resort</label>
                </div>
                <div className="flex flex-row">
                    <input type="checkbox" className="w-5 h-5 p-4" />
                    <label className="ml-4">Motel</label>
                </div>
                <div className="flex flex-row">
                    <input type="checkbox" className="w-5 h-5 p-4" />
                    <label className="ml-4">Others</label>
                </div>
                <div>Star rating</div>
                <div className="flex flex-row">
                    <input type="checkbox" className="w-5 h-5 p-4" />
                    <label className="ml-4">All</label>
                </div>
                <div className="flex flex-row">
                    <input type="checkbox" className="w-5 h-5 p-4" />
                    <label className="ml-4">5 star</label>
                </div>
                <div className="flex flex-row">
                    <input type="checkbox" className="w-5 h-5 p-4" />
                    <label className="ml-4">4 star</label>
                </div>
                <div className="flex flex-row">
                    <input type="checkbox" className="w-5 h-5 p-4" />
                    <label className="ml-4">3 star</label>
                </div>
                <div className="flex flex-row">
                    <input type="checkbox" className="w-5 h-5 p-4" />
                    <label className="ml-4">2 star</label>
                </div>
            </div>
        </div>
    )
}
