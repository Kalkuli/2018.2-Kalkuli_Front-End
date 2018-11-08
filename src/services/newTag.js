import axios from 'axios'

export default async (tag) => {
    let request = null
    try {
        request = await axios.post('http://172.21.0.1:5008/api/v1/create_tag', {"tag": tag })
        return 'success'
    }
    catch(err){
        return err.response.data.message
    }
}