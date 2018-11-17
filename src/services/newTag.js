import axios from 'axios'
import * as baseUrl from '../helpers/baseUrl'

export default async (tag, mockError) => {
    try {
        if(mockError) throw 'mockingError'
        await axios.post(baseUrl.default + '/api/v1/create_tag', {"tag": tag })
        return 'success'
    }
    catch(err){
        return 'error'
    }
}