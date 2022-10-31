import React from 'react';
import { useLocation } from "react-router-dom";

const DashboardFooter = () => {
    let location = useLocation();

    if (location.pathname === "/") {
        return null
    } else {
        return (
            <div className='dashboard_footer'>
                <div className='copy_right_block'>
                    <p>Copyright © 2022 <a href="#0">Mercury</a></p>
                </div>
            </div>
        )
    }
}

export default DashboardFooter;