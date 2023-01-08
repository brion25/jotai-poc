import React from 'react'
import {Outlet} from "react-router";
import {Link} from "react-router-dom";

const RootComponent = () => {
    return (
        <div>
            <div className="flex flex-col items-center mb-3 p-3">
                <h1 className="mb-4">Title</h1>
                <div className="flex justify-between items-center w-full">
                    <Link to="/">Home</Link>
                    <p>Messages</p>
                    <Link to="/new">New</Link>
                </div>
            </div>
            <div className="overflow-auto">
                <Outlet />
            </div>
        </div>
    )
}

export default RootComponent
