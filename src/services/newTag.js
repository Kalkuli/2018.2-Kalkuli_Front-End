import axios from 'axios'
import * as baseUrl from '../helpers/baseUrl'
import {config, baseURL} from './axiosConfig'

export default async (tag, mockError) => {
    try {
        if(mockError) throw 'mockingError'
        await axios.post(`${baseUrl.default}/create_tag`, {"tag": tag }, config)
        return 'success'
    }
    catch(err){
        return 'error'
    }
}