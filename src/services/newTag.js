import axios from 'axios'
import {config, baseURL} from './axiosConfig'

export default async (tag) => {
    try {
        await axios.post(`${baseURL}/create_tag`, {"tag": tag }, config)
        return 'success'
    }
    catch(err){
        return err.response.data.message
    }
}