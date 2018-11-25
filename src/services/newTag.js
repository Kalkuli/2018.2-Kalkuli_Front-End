import axios from 'axios'
import {config, baseURL} from './axiosConfig'

export default async (tag, mockError) => {
    try {
        if(mockError) throw new Error('mockingError')
        await axios.post(`${baseURL}/create_tag`, {"tag": tag }, config)
        return 'success'
    }
    catch(err){
        return 'error'
    }
}