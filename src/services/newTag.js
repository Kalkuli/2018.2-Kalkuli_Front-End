import axios from 'axios'

export default async (tag, mockError) => {
    try {
        if(mockError) throw 'mockingError'
        await axios.post('https://2wpulxi1r7.execute-api.sa-east-1.amazonaws.com/hom/api/v1/create_tag', {"tag": tag })
        return 'success'
    }
    catch(err){
        return 'error'
    }
}