import axios from 'axios'
import {config, baseURL} from './axiosConfig'

export default async (mockError) => {
    try {
        if(mockError) throw new Error('mockingError')
        const company_id = localStorage.getItem('company_id')
        const response = await axios.get(`${baseURL}/${company_id}/get_all_reports`, config)
        return response.data.data.reports
    }
    catch(err) {
        return 'error'
    }
}