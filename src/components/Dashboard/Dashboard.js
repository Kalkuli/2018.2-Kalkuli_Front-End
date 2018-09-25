import React from 'react'
import './Dashboard.scss'
import Navbar from '../UI/Navbar/Navbar'
import Report from '../UI/Report/Report';

const Dashboard = () => {
    return(
        <div className="dashboard">
            <Navbar/>  
            <Report/>
        </div>
    )
}

export default Dashboard