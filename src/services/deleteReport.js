import axios from 'axios'

export default async report_id => {
  const response = await axios.delete(`http://172.22.0.1:5008/api/v1/report/${report_id}`)
  return response.data
}
