import axios from 'axios'
import * as baseUrl from '../helpers/baseUrl'

export default async (tag) => {
    try {
        await axios.post(baseUrl.default + '/api/v1/create_tag', {"tag": tag })
        return 'success'
    }
    catch(err){
        return err.response.data.message
    }
}