import React from 'react'
import './ReportLabels.scss'

const ReportLabels = () => {
    return(
        <div className="report-labels">
            <p className="report-labels__data">Data:</p>
            <p className="report-labels__data">CNPJ:</p>
            <p className="report-labels__data">Valor:</p>
        </div>
    )
}

export default ReportLabels