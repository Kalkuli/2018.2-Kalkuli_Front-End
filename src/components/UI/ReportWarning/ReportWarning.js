import React from 'react'
import './ReportWarning.scss'

const ReportWarning = (props) => {
    return (
        <div className="report">
            <div className="report__warning pulsing-text-report"> 
                {props.children}
            </div>
        </div>
    ) 
}

export default ReportWarning